const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'app');
const destDir = path.join(__dirname, '..', 'app', 'uae');

const excludeList = [
  'admin',
  'api',
  'blog',
  'fonts',
  'styles',
  'uae', // Do not copy itself
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
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} -> ${destPath}`);
    }
  }
}

console.log('Starting duplication to app/uae...');
copyFolderSync(srcDir, destDir, true);
console.log('Duplication complete!');
