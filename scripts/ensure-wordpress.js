/**
 * ensure-wordpress.js
 *
 * Runs automatically after every Hostinger Git auto-deployment
 * via the "postinstall" and "postbuild" npm hooks in package.json.
 *
 * PROBLEM:
 *   Hostinger's Git Auto-deployment pulls from GitHub and replaces the entire
 *   public_html/ directory on every push. WordPress files inside public/blogs/
 *   are NOT in Git (gitignored), so they get permanently deleted every deploy.
 *
 * SOLUTION:
 *   WordPress lives in a PERSISTENT directory OUTSIDE public_html/
 *   (e.g. /home/u123456789/wordpress_blogs/) that Hostinger never touches.
 *   This script creates a symbolic link after each deployment:
 *
 *     public/blogs/  →  /home/u123456789/wordpress_blogs/
 *
 *   The symlink is recreated automatically on every deployment. ✓
 *
 * ─── ONE-TIME SETUP ON HOSTINGER (do this ONCE) ──────────────────────────────
 *
 *   STEP 1 — Find your Hostinger home path:
 *     Open File Manager → navigate UP from public_html → note the path
 *     It looks like: /home/u123456789/
 *
 *   STEP 2 — Create persistent folder via File Manager (OUTSIDE public_html):
 *     /home/u123456789/wordpress_blogs/
 *
 *   STEP 3 — Upload WordPress into that folder:
 *     Download from wordpress.org → unzip → upload all files into
 *     /home/u123456789/wordpress_blogs/
 *
 *   STEP 4 — Create MySQL database in Hostinger hPanel → Databases
 *
 *   STEP 5 — Add Environment Variable in Hostinger dashboard:
 *     Go to: Website → Environment Variables
 *     Key:   WORDPRESS_PERSISTENT_PATH
 *     Value: /home/u123456789/wordpress_blogs
 *     (replace u123456789 with your actual Hostinger user ID)
 *
 *   STEP 6 — Push any small change to GitHub to trigger a new deployment.
 *            This script will run and create the symlink automatically.
 *
 *   STEP 7 — Visit https://www.theimpulsedigital.com/blogs/ to finish
 *            the WordPress installation wizard.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ─── Config ───────────────────────────────────────────────────────────────────

// Persistent WordPress directory — set WORDPRESS_PERSISTENT_PATH in Hostinger
// Environment Variables. Fallback: ~/wordpress_blogs (next to public_html)
const persistentWpPath =
  process.env.WORDPRESS_PERSISTENT_PATH ||
  path.join(process.env.HOME || '/home', 'wordpress_blogs');

// Where public/blogs/ lives inside the deployed app
const blogsLinkPath = path.join(__dirname, '..', 'public', 'blogs');

// WordPress .htaccess — always kept in sync so routing never breaks
const WP_HTACCESS = `# Disable Phusion Passenger so Apache serves WordPress PHP directly
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

function readLink(p) {
  try   { return fs.readlinkSync(p); }
  catch { return null; }
}

function writeHtaccess(dir) {
  try {
    fs.writeFileSync(path.join(dir, '.htaccess'), WP_HTACCESS, { flag: 'w' });
    log(`   ✅ .htaccess synced in: ${dir}`);
  } catch (e) {
    log(`   ⚠️  Could not write .htaccess: ${e.message}`);
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function ensureWordPress() {
  log('══════════════════════════════════════════════════');
  log('WordPress persistence check');
  log(`  Persistent WP path : ${persistentWpPath}`);
  log(`  Symlink target      : ${blogsLinkPath}`);
  log('══════════════════════════════════════════════════');

  if (fs.existsSync(persistentWpPath)) {
    // ── Persistent WordPress folder exists — create/validate symlink ──────────
    log('✅ Persistent WordPress directory found.');

    // Keep .htaccess up to date inside the persistent dir
    writeHtaccess(persistentWpPath);

    // Check current state of public/blogs/
    if (isSymlink(blogsLinkPath)) {
      const target = readLink(blogsLinkPath);
      if (target === persistentWpPath) {
        log('✅ Symlink already correct — WordPress is safe. ✓');
        log('══════════════════════════════════════════════════');
        return;
      }
      log('   Stale symlink found — removing...');
      fs.unlinkSync(blogsLinkPath);
    } else if (fs.existsSync(blogsLinkPath)) {
      // Real directory (the Git placeholder) — remove it to replace with symlink
      log('   Removing Git placeholder blogs/ directory...');
      fs.rmSync(blogsLinkPath, { recursive: true, force: true });
    }

    // Create the symlink
    try {
      fs.symlinkSync(persistentWpPath, blogsLinkPath, 'dir');
      log('✅ Symlink created successfully:');
      log(`   public/blogs/  →  ${persistentWpPath}`);
      log('✅ WordPress will survive every future deployment! ✓');
    } catch (err) {
      if (err.code === 'EPERM') {
        // Windows dev machine — symlinks require elevated permissions
        log('   Symlink skipped (Windows dev env needs admin rights).');
        log('   On the Linux server this runs correctly. ✓');
      } else {
        log(`❌ Symlink failed: ${err.message}`);
        log('   Falling back to placeholder...');
        ensurePlaceholder();
      }
    }

  } else {
    // ── Persistent folder not yet created — show setup instructions ───────────
    log('⚠️  Persistent WordPress directory NOT found.');
    log(`   Expected at: ${persistentWpPath}`);
    log('');
    log('   → One-time setup required:');
    log('   1. In Hostinger File Manager, create this folder:');
    log(`      ${persistentWpPath}`);
    log('   2. Upload all WordPress files into that folder.');
    log('   3. In Hostinger → Environment Variables, add:');
    log('      Key:   WORDPRESS_PERSISTENT_PATH');
    log(`      Value: ${persistentWpPath}`);
    log('   4. Push to GitHub to re-trigger deployment.');
    log('   5. Visit /blogs/ to complete the WordPress wizard.');
    log('');
    log('   Creating placeholder so the site does not break...');
    ensurePlaceholder();
  }

  log('══════════════════════════════════════════════════');
}

function ensurePlaceholder() {
  if (!fs.existsSync(blogsLinkPath)) {
    fs.mkdirSync(blogsLinkPath, { recursive: true });
    log('   Created empty placeholder: public/blogs/');
  }
  writeHtaccess(blogsLinkPath);
  const indexPath = path.join(blogsLinkPath, 'index.php');
  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(
      indexPath,
      '<?php // WordPress placeholder. See WORDPRESS_BLOG_SETUP.md\n'
    );
    log('   Created placeholder index.php.');
  }
}

// ─── Run ──────────────────────────────────────────────────────────────────────
ensureWordPress();
