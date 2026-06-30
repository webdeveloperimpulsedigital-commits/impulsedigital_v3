const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      if (fullPath.includes('layout.tsx') && !fullPath.includes('case-studies\\layout.tsx')) {
        continue; // Skip layout files EXCEPT case-studies/layout which might have it
      }
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Match something like:
      // alternates: {
      //   canonical: `${SITE_URL}/something/`,
      // },
      const regex = /\s*alternates:\s*\{\s*canonical:\s*`\$\{SITE_URL\}[^`]*`,\s*\},/g;
      
      if (regex.test(content)) {
        content = content.replace(regex, '');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Removed alternates from ' + fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, '..', 'app'));
