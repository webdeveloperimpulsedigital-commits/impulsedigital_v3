const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public', 'slide-share-ppt');
const outputPath = path.join(__dirname, 'data', 'slidesharePpts.ts');

const IMAGES = [
  'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80'
];

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  
  let ppts = [];
  let idCounter = 1;

  files.forEach(function (file) {
    if (file.endsWith('.pdf')) {
      // Create title
      let baseName = file.replace('.pdf', '');
      let title = baseName.replace(/[-_]/g, ' ');
      // Handle camel case splitting roughly if needed, but looks like mostly hyphens/underscores
      title = title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

      // Determine category
      let lowerName = baseName.toLowerCase();
      let category = 'Content Marketing PPT'; // default

      if (/(seo|google|search|penguin|paa)/.test(lowerName)) {
        category = 'Google Ads / SEM PPT';
      } else if (/(social|facebook|youtube|instagram|linkedin|whatsapp|twitter|pinterest|reddit|threads|igtv)/.test(lowerName)) {
        category = 'Social Media PPT';
      } else if (/(employer|workplace|hybrid|inclusion)/.test(lowerName)) {
        category = 'Employer Branding PPT';
      } else if (/(website|ui|ux|ecommerce|web|cms)/.test(lowerName)) {
        category = 'Website Design Development PPT';
      }

      // Assign random image from array
      let image = IMAGES[idCounter % IMAGES.length];

      ppts.push({
        id: idCounter++,
        title: title,
        category: category,
        image: image,
        url: `/slide-share-ppt/${file}`
      });
    }
  });

  const fileContent = `export const slideshareData = ${JSON.stringify(ppts, null, 2)};\n`;

  fs.writeFile(outputPath, fileContent, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Successfully wrote to ' + outputPath);
  });
});
