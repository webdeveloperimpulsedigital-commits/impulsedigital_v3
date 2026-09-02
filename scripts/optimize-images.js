const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const workspaceDir = 'c:\\Users\\AAA RENTAL LLP\\Desktop\\impulsedigital_v3';
const publicDir = path.join(workspaceDir, 'public');

// PNG files to convert to WebP (from Option A)
const pngsToWebp = [
  'images/case-study-image/chings-kurkure/chings-kurkure.png',
  'images/case-study-image/chings-foodfarmer/Foodfarmer.png',
  'images/case-study-image/salt/tata-cunsumer.png',
  'images/case-study-image/salt/shaking-things-up.png',
  'images/case-study-image/tata-soulfull/Generated image 1.png',
  'images/case-study-image/tcpl/AUS_us.png'
];

async function optimizeImage(filePath, relPath) {
  const ext = path.extname(filePath).toLowerCase();
  const stat = fs.statSync(filePath);
  const originalSizeKB = (stat.size / 1024).toFixed(1);
  
  // Decide target dimensions and settings based on path
  const isLogo = relPath.startsWith('logos/');
  const maxDimension = isLogo ? 150 : 1200;
  
  // 1. Special Case: Convert selected PNGs to WebP
  if (pngsToWebp.includes(relPath)) {
    const targetWebpPath = filePath.substring(0, filePath.length - ext.length) + '.webp';
    console.log(`Converting PNG to WebP: ${relPath} (${originalSizeKB} KB)`);
    try {
      const inputBuffer = fs.readFileSync(filePath);
      await sharp(inputBuffer)
        .resize({ width: 1200, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(targetWebpPath);
      
      // Delete the original PNG file
      fs.unlinkSync(filePath);
      const newStat = fs.statSync(targetWebpPath);
      console.log(`  -> Saved as WebP: ${(newStat.size / 1024).toFixed(1)} KB (Saved: ${(100 - (newStat.size / stat.size) * 100).toFixed(1)}%)`);
    } catch (err) {
      console.error(`  Error converting ${relPath}: ${err.message}`);
    }
    return;
  }

  // 2. Regular Optimization in-place using Buffer to avoid Windows EBUSY locks
  try {
    const inputBuffer = fs.readFileSync(filePath);
    const metadata = await sharp(inputBuffer).metadata();
    
    // Check if we actually need to resize or if it's already smaller than maxDimension
    const needsResize = metadata.width > maxDimension || metadata.height > maxDimension;
    
    let pipeline = sharp(inputBuffer);
    if (needsResize) {
      if (isLogo) {
        pipeline = pipeline.resize({ width: maxDimension, height: maxDimension, fit: 'inside' });
      } else {
        pipeline = pipeline.resize({ width: maxDimension, fit: 'inside', withoutEnlargement: true });
      }
    }
    
    // Configure compression formats
    if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: 75 });
    } else if (ext === '.avif') {
      pipeline = pipeline.avif({ quality: 75 });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ compressionLevel: 9, quality: 70 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 75 });
    } else {
      return; // Skip unsupported formats
    }
    
    const outputBuffer = await pipeline.toBuffer();
    
    // Overwrite the original file directly (Windows allows this even if it is locked for deletion/rename)
    fs.writeFileSync(filePath, outputBuffer);
    
    const newStat = fs.statSync(filePath);
    const newSizeKB = (newStat.size / 1024).toFixed(1);
    
    if (newStat.size < stat.size) {
      console.log(`Optimized: ${relPath} | Original: ${originalSizeKB} KB | New: ${newSizeKB} KB | Savings: ${(100 - (newStat.size / stat.size) * 100).toFixed(1)}%`);
    } else {
      console.log(`Processed: ${relPath} | Size change: ${originalSizeKB} KB -> ${newSizeKB} KB`);
    }
  } catch (err) {
    console.error(`Error processing ${relPath}: ${err.message}`);
  }
}

function getFiles(dir, filter = () => true) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, filter));
    } else {
      if (filter(file)) {
        results.push({
          path: fullPath,
          relPath: path.relative(publicDir, fullPath).replace(/\\/g, '/')
        });
      }
    }
  });
  return results;
}

const isImage = (file) => {
  const ext = path.extname(file).toLowerCase();
  return ['.png', '.jpg', '.jpeg', '.webp', '.avif'].includes(ext);
};

async function run() {
  console.log('Starting Image Optimization...');
  
  // 1. Scan and optimize all images in logos, case studies, and images
  const targetDirs = [
    path.join(publicDir, 'logos'),
    path.join(publicDir, 'case studies'),
    path.join(publicDir, 'images')
  ];
  
  let filesToProcess = [];
  targetDirs.forEach(dir => {
    filesToProcess = filesToProcess.concat(getFiles(dir, isImage));
  });
  
  // Also include the SEO metadata image in public root
  const seoImgPath = path.join(publicDir, 'AI-SEO-Agency.png');
  if (fs.existsSync(seoImgPath)) {
    filesToProcess.push({
      path: seoImgPath,
      relPath: 'AI-SEO-Agency.png'
    });
  }

  console.log(`Found ${filesToProcess.length} images to check and optimize.`);
  
  // Process sequentially to avoid memory pressure
  for (const img of filesToProcess) {
    await optimizeImage(img.path, img.relPath);
  }
  
  console.log('Image Optimization Completed successfully!');
}

run();
