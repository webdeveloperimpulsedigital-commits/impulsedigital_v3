const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'app');
const destDir = path.join(__dirname, '..', 'app', 'ae');

const excludeList = [
  'admin',
  'api',
  'blog',
  'fonts',
  'styles',
  'ae', // Do not copy itself
];

// Files to exclude from the root of app/ (we only copy page.tsx, not layout.tsx, globals.css, etc.)
const excludeRootFiles = [
  'layout.tsx',
  'globals.css',
  'sitemap.ts',
  'robots.ts',
  'not-found.tsx',
];

function copyFolderSync(from, to, isRoot = false) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }

  const items = fs.readdirSync(from);

  for (const item of items) {
    const srcPath = path.join(from, item);
    const destPath = path.join(to, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      if (isRoot && excludeList.includes(item)) {
        console.log(`Skipping directory: ${item}`);
        continue;
      }
      copyFolderSync(srcPath, destPath, false);
    } else {
      if (isRoot && excludeRootFiles.includes(item)) {
        console.log(`Skipping root file: ${item}`);
        continue;
      }
      if (srcPath.endsWith('.tsx') || srcPath.endsWith('.ts')) {
        let content = fs.readFileSync(srcPath, 'utf8');
        content = content.replace(/\$\{SITE_URL\}\//g, '${SITE_URL}/ae/');
        if (isRoot && item === 'page.tsx') {
          // Replace Mumbai with Dubai ONLY on the main home page (app/ae/page.tsx)
          content = content.replace(/(?<![\/\-])\bMumbai\b(?![\/\-])/g, 'Dubai');
          content = content.replace(/(?<![\/\-])\bmumbai\b(?![\/\-])/g, 'dubai');
        }
        fs.writeFileSync(destPath, content, 'utf8');
        console.log(`Copied and modified: ${srcPath} -> ${destPath}`);
      } else {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${srcPath} -> ${destPath}`);
      }
    }
  }
}

console.log('Starting duplication to app/ae...');
copyFolderSync(srcDir, destDir, true);
console.log('Duplication complete!');
