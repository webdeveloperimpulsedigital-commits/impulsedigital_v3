const fs = require('fs');
const path = require('path');
const sizeOfPkg = require('image-size');
const sizeOf = sizeOfPkg.imageSize || sizeOfPkg.default || sizeOfPkg;

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

const files = findTsxFiles(pagesDir);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  const imgRegex = /<img([^>]+)>/g;
  
  content = content.replace(imgRegex, (match, attrs) => {
    if (attrs.includes('width=') && attrs.includes('height=')) {
      return match;
    }

    const srcMatch = attrs.match(/src=\{?["'`]?([^"'`{}]+)["'`]?\}?/);
    if (!srcMatch) return match;

    let src = srcMatch[1];
    if (src.includes('${base}')) {
        src = src.replace('${base}', '/');
    }
    if (!src.startsWith('/')) {
        return match;
    }

    src = decodeURIComponent(src);
    const imagePath = path.join(publicDir, src);
    
    if (fs.existsSync(imagePath)) {
        try {
            const dimensions = sizeOf(imagePath);
            let newAttrs = attrs;
            if (!newAttrs.includes('width=')) {
                newAttrs += ` width={${dimensions.width}}`;
            }
            if (!newAttrs.includes('height=')) {
                newAttrs += ` height={${dimensions.height}}`;
            }
            return `<img${newAttrs}>`;
        } catch (e) {
            console.error(`Error reading dimensions for ${imagePath}:`, e.message);
        }
    }
    
    return match;
  });

  if (content !== fs.readFileSync(file, 'utf8')) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
