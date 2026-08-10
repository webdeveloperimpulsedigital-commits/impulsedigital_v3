const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const pagesDir = path.join(__dirname, '../components/pages');
const publicDir = path.join(__dirname, '../public');

function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findTsxFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

async function processFiles() {
  const files = findTsxFiles(pagesDir);

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    const imgMatches = Array.from(content.matchAll(/<img([^>]+)>/g));
    let modified = false;

    for (const match of imgMatches) {
      const fullMatch = match[0];
      const attrs = match[1];

      if (attrs.includes('width=') && attrs.includes('height=')) {
        continue;
      }

      const literalMatch = attrs.match(/src=["']([^"']+)["']/);
      const expressionStringMatch = attrs.match(/src=\{["']([^"']+)["']\}/);
      const baseTemplateMatch = attrs.match(/src=\{`\$\{base\}([^`$]+)`\}/);
      const srcMatch = literalMatch || expressionStringMatch || baseTemplateMatch;
      if (!srcMatch) continue;

      let src = baseTemplateMatch ? `/${srcMatch[1]}` : srcMatch[1];
      if (!src.startsWith('/')) continue;

      try {
        src = decodeURIComponent(src);
      } catch {
        continue;
      }
      const imagePath = path.join(publicDir, src);

      if (fs.existsSync(imagePath)) {
        try {
          const metadata = await sharp(imagePath).metadata();
          if (metadata.width && metadata.height) {
            const selfClosing = /\/\s*$/.test(attrs);
            let newAttrs = attrs.replace(/\/\s*$/, '');
            if (!newAttrs.includes('width=')) {
              newAttrs += ` width={${metadata.width}}`;
            }
            if (!newAttrs.includes('height=')) {
              newAttrs += ` height={${metadata.height}}`;
            }
            const newTag = `<img${newAttrs}${selfClosing ? ' /' : ''}>`;
            content = content.replace(fullMatch, newTag);
            modified = true;
          }
        } catch (e) {
          console.error(`Error reading dimensions for ${imagePath}:`, e.message);
        }
      }
    }

    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    }
  }
}

processFiles().catch(console.error);

