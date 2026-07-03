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

const pageFiles = getAllFiles('app/ae'); // Only check AE files

pageFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  components.forEach(comp => {
    // We want to replace `@/data/${comp.dataName}` with `@/data/ae/${comp.dataName}`
    const oldImportRegex = new RegExp(`from\\s+['"]@/data/${comp.dataName}['"]`);
    if (oldImportRegex.test(content)) {
      content = content.replace(oldImportRegex, `from '@/data/ae/${comp.dataName}'`);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Fixed AE import in ${file}`);
  }
});
