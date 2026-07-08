'use strict';

/**
 * ensure-wordpress.js
 *
 * Runs via postinstall + postbuild npm hooks on every Hostinger auto-deployment.
 *
 * STRATEGY: Instead of a symlink (which breaks if Hostinger copies built files),
 * we COPY WordPress core files from the persistent directory into public/blogs/
 * on every deployment. Only wp-content/uploads/ is symlinked (to avoid copying
 * large media files on every deploy).
 *
 * PERSISTENT DIRECTORY: /home/u663113707/wordpress_blogs/
 *   - wp-config.php         (database credentials — persisted here)
 *   - wp-content/uploads/   (user uploads — persisted here, symlinked in)
 *   - all WordPress core files
 *
 * Set env var in Hostinger → Environment Variables:
 *   WORDPRESS_PERSISTENT_PATH = /home/u663113707/wordpress_blogs
 */

const fs   = require('fs');
const path = require('path');

// ─── Config ───────────────────────────────────────────────────────────────────

const persistentWpPath =
  process.env.WORDPRESS_PERSISTENT_PATH ||
  path.join(process.env.HOME || '/home', 'wordpress_blogs');

const blogsDir = path.join(__dirname, '..', 'public', 'blogs');

const WP_HTACCESS = `# Disable Phusion Passenger so Apache/LiteSpeed serves WordPress PHP directly
PassengerEnabled off

# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /blogs/
RewriteRule ^index\\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /blogs/index.php [L]
</IfModule>
# END WordPress
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const log = (msg) => console.log(`[ensure-wordpress] ${msg}`);

function isSymlink(p) {
  try   { return fs.lstatSync(p).isSymbolicLink(); }
  catch { return false; }
}

function pathExists(p) {
  try   { fs.accessSync(p); return true; }
  catch { return false; }
}

/**
 * Recursively copy a directory from src to dest.
 * Skips symlinks in src (avoids circular references).
 * Skips items listed in 'skip' array (relative names).
 */
function copyDirSync(src, dest, skip = []) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (skip.includes(entry.name)) continue;
    const srcPath  = path.join(src,  entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isSymbolicLink()) continue; // skip symlinks in source
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath, []);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function ensureWordPress() {
  log('══════════════════════════════════════════════════');
  log('WordPress deployment check');
  log(`  Persistent source  : ${persistentWpPath}`);
  log(`  Deploy destination : ${blogsDir}`);
  log('══════════════════════════════════════════════════');

  if (!pathExists(persistentWpPath)) {
    // ── Persistent directory not yet created ────────────────────────────────
    log('⚠️  Persistent WordPress directory NOT found.');
    log(`   Expected at: ${persistentWpPath}`);
    log('');
    log('   ONE-TIME SETUP REQUIRED:');
    log('   1. In Hostinger File Manager, at /home/u663113707/ level,');
    log('      create folder: wordpress_blogs');
    log('   2. Upload all WordPress files into it.');
    log('   3. Add env var: WORDPRESS_PERSISTENT_PATH=/home/u663113707/wordpress_blogs');
    log('   4. Push to GitHub to re-trigger deployment.');
    log('');
    log('   Creating placeholder so site does not break...');
    ensurePlaceholder();
    return;
  }

  log('✅ Persistent WordPress directory found — syncing to public/blogs/...');

  // Ensure blogs/ directory exists
  if (!fs.existsSync(blogsDir)) {
    fs.mkdirSync(blogsDir, { recursive: true });
  } else if (isSymlink(blogsDir)) {
    // Remove old symlink approach if present
    fs.unlinkSync(blogsDir);
    fs.mkdirSync(blogsDir, { recursive: true });
  }

  // ── 1. Copy WordPress core files (skip uploads — handled separately) ───────
  log('   Copying WordPress core files...');
  try {
    copyDirSync(persistentWpPath, blogsDir, ['wp-content']);
    log('   ✅ WordPress core files copied.');
  } catch (e) {
    log(`   ❌ Copy error: ${e.message}`);
  }

  // ── 2. Copy wp-content (themes, plugins) but handle uploads separately ─────
  const srcWpContent  = path.join(persistentWpPath, 'wp-content');
  const destWpContent = path.join(blogsDir, 'wp-content');

  if (pathExists(srcWpContent)) {
    log('   Copying wp-content (themes, plugins)...');
    try {
      copyDirSync(srcWpContent, destWpContent, ['uploads']);
      log('   ✅ wp-content copied (uploads handled separately).');
    } catch (e) {
      log(`   ❌ wp-content copy error: ${e.message}`);
    }
  }

  // ── 3. Symlink wp-content/uploads to persistent location ──────────────────
  //    Uploads are user media files — too large to copy every deploy.
  //    We symlink them from the persistent directory.
  const srcUploads  = path.join(persistentWpPath, 'wp-content', 'uploads');
  const destUploads = path.join(blogsDir, 'wp-content', 'uploads');

  // Ensure persistent uploads directory exists
  if (!fs.existsSync(srcUploads)) {
    fs.mkdirSync(srcUploads, { recursive: true });
    log('   Created persistent uploads directory.');
  }

  // Create symlink for uploads
  if (isSymlink(destUploads)) {
    fs.unlinkSync(destUploads);
  } else if (fs.existsSync(destUploads)) {
    fs.rmSync(destUploads, { recursive: true, force: true });
  }

  try {
    fs.symlinkSync(srcUploads, destUploads, 'dir');
    log(`   ✅ Uploads symlinked: wp-content/uploads/ → ${srcUploads}`);
  } catch (e) {
    if (e.code === 'EPERM') {
      log('   Uploads symlink skipped (Windows dev env). Works on Linux server. ✓');
      // Copy uploads instead on Windows
      try { copyDirSync(srcUploads, destUploads, []); } catch {}
    } else {
      log(`   ⚠️  Uploads symlink error: ${e.message}`);
    }
  }

  // ── 4. Always write the correct WordPress .htaccess ───────────────────────
  try {
    fs.writeFileSync(path.join(blogsDir, '.htaccess'), WP_HTACCESS);
    log('   ✅ WordPress .htaccess written.');
  } catch (e) {
    log(`   ⚠️  .htaccess write error: ${e.message}`);
  }

  log('══════════════════════════════════════════════════');
  log('✅ WordPress synced to public/blogs/ successfully!');
  log('   WordPress is ready to serve at /blogs/');
  log('══════════════════════════════════════════════════');
}

function ensurePlaceholder() {
  if (!fs.existsSync(blogsDir)) {
    fs.mkdirSync(blogsDir, { recursive: true });
  }
  fs.writeFileSync(path.join(blogsDir, '.htaccess'), WP_HTACCESS);
  const idx = path.join(blogsDir, 'index.php');
  if (!fs.existsSync(idx)) {
    fs.writeFileSync(idx, '<?php // WordPress placeholder. See WORDPRESS_BLOG_SETUP.md\n');
  }
  log('   Placeholder created at public/blogs/');
}

ensureWordPress();
syncCss();

/**
 * Copy CSS files from app/styles/ → public/css/ and .next/standalone/public/css/
 * so the standalone production server can serve them at /css/*.
 */
function syncCss() {
  const srcStylesDir      = path.join(__dirname, '..', 'app', 'styles');
  const destPublicCss     = path.join(__dirname, '..', 'public', 'css');
  const destStandaloneCss = path.join(__dirname, '..', '.next', 'standalone', 'public', 'css');

  if (!fs.existsSync(srcStylesDir)) {
    log('⚠️  app/styles/ not found — skipping CSS sync.');
    return;
  }

  log('');
  log('══════════════════════════════════════════════════');
  log('CSS sync: app/styles/ → public/css/ + standalone');
  log('══════════════════════════════════════════════════');

  [destPublicCss, destStandaloneCss].forEach((dest) => {
    try {
      fs.mkdirSync(dest, { recursive: true });
      const files = fs.readdirSync(srcStylesDir).filter(f => f.endsWith('.css'));
      files.forEach((file) => {
        fs.copyFileSync(path.join(srcStylesDir, file), path.join(dest, file));
      });
      log(`   ✅ Copied ${files.length} CSS file(s) to ${dest}`);
    } catch (e) {
      log(`   ⚠️  CSS sync error for ${dest}: ${e.message}`);
    }
  });
}
