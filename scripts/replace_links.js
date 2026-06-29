const fs = require('fs');
const path = require('path');

const dirsToProcess = [
  path.join(__dirname, '..', 'app'),
  path.join(__dirname, '..', 'components'),
];

function processDirectory(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (item === 'admin' || item === 'api') continue;
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace import Link from 'next/link' with import Link from '@/components/RegionLink'
      // Handle single and double quotes
      const regex = /import\s+Link\s+from\s+['"]next\/link['"];?/g;
      
      if (regex.test(content)) {
        content = content.replace(regex, "import Link from '@/components/RegionLink';");
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated links in: ${fullPath}`);
      }
    }
  }
}

for (const dir of dirsToProcess) {
  processDirectory(dir);
}

console.log('Finished updating links.');
