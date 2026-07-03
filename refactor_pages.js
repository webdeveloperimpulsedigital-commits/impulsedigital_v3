const fs = require('fs');
const path = require('path');

const components = [
  { name: 'AgenticAI', dataName: 'agenticAiData' },
  { name: 'AIVideoProduction', dataName: 'aiVideoProductionData' },
  { name: 'AlwaysOnIntelligence', dataName: 'alwaysOnIntelligenceData' },
  { name: 'ArcherAI', dataName: 'archerAiData' },
  { name: 'Branding', dataName: 'brandingData' },
  { name: 'CampaignIntelligence', dataName: 'campaignIntelligenceData' },
  { name: 'ConsumerIntelligence', dataName: 'consumerIntelligenceData' },
  { name: 'EmployerBranding', dataName: 'employerBrandingData' },
  { name: 'GenerativeSearchOptimisation', dataName: 'generativeSearchOptimisationData' },
  { name: 'MarketIntelligence', dataName: 'marketIntelligenceData' },
  { name: 'SearchEngineOptimisation', dataName: 'searchEngineOptimisationData' },
  { name: 'SocialMediaManagement', dataName: 'socialMediaManagementData' },
  { name: 'VideoProduction', dataName: 'videoProductionData' },
  { name: 'WebsiteDevelopment', dataName: 'websiteDevelopmentData' }
];

function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file === 'page.tsx') {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
}

const pageFiles = getAllFiles('app');

pageFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  const isAe = file.replace(/\\/g, '/').includes('/app/ae/');

  components.forEach(comp => {
    const importComponentRegex = new RegExp(`import\\s+${comp.name}\\s+from\\s+['"]@/components/pages/${comp.name}['"]`);
    if (importComponentRegex.test(content)) {
      // Check if data is already imported
      const dataImportRegex = new RegExp(`import\\s+{\\s*${comp.dataName}\\s*}\\s+from`);
      if (!dataImportRegex.test(content)) {
        const dataImport = isAe 
          ? `import { ${comp.dataName} } from '@/data/ae/${comp.dataName}';\n`
          : `import { ${comp.dataName} } from '@/data/${comp.dataName}';\n`;
        
        // Insert after component import
        content = content.replace(importComponentRegex, match => `${match};\n${dataImport}`);
      }

      // Replace <Comp /> or <Comp></Comp> with <Comp data={dataName} />
      // Need to be careful with regex to match the component tag
      const compTagRegex = new RegExp(`<${comp.name}\\s*/>|<${comp.name}\\s*></${comp.name}>`, 'g');
      content = content.replace(compTagRegex, `<${comp.name} data={${comp.dataName}} />`);
      
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
