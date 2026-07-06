const fs = require('fs');

const files = [
  { file: 'AgenticAI.tsx', dataName: 'agenticAiData' },
  { file: 'AIVideoProduction.tsx', dataName: 'aiVideoProductionData' },
  { file: 'AlwaysOnIntelligence.tsx', dataName: 'alwaysOnIntelligenceData' },
  { file: 'ArcherAI.tsx', dataName: 'archerAiData' },
  { file: 'Branding.tsx', dataName: 'brandingData' },
  { file: 'CampaignIntelligence.tsx', dataName: 'campaignIntelligenceData' },
  { file: 'ConsumerIntelligence.tsx', dataName: 'consumerIntelligenceData' },
  { file: 'EmployerBranding.tsx', dataName: 'employerBrandingData' },
  { file: 'GenerativeSearchOptimisation.tsx', dataName: 'generativeSearchOptimisationData' },
  { file: 'MarketIntelligence.tsx', dataName: 'marketIntelligenceData' },
  { file: 'SearchEngineOptimisation.tsx', dataName: 'searchEngineOptimisationData' },
  { file: 'SocialMediaManagement.tsx', dataName: 'socialMediaManagementData' },
  { file: 'VideoProduction.tsx', dataName: 'videoProductionData' },
  { file: 'WebsiteDevelopment.tsx', dataName: 'websiteDevelopmentData' }
];

files.forEach(({ file, dataName }) => {
  const filePath = `components/pages/${file}`;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Remove import
  const importRegex = new RegExp(`import\\s+{\\s*${dataName}\\s*}\\s+from\\s+'@/data/${dataName}';\\s*\\n?`);
  content = content.replace(importRegex, '');
  
  // 2. Change component signature
  const componentName = file.replace('.tsx', '');
  const sigRegex1 = new RegExp(`const\\s+${componentName}\\s*:\\s*React\\.FC\\s*=\\s*\\(\\)\\s*=>\\s*{`);
  if (sigRegex1.test(content)) {
    content = content.replace(sigRegex1, `const ${componentName}: React.FC<{ data: any }> = ({ data }) => {`);
  } else {
    const sigRegex2 = new RegExp(`const\\s+${componentName}\\s*=\\s*\\(\\)\\s*=>\\s*{`);
    if (sigRegex2.test(content)) {
      content = content.replace(sigRegex2, `const ${componentName} = ({ data }: { data: any }) => {`);
    } else {
       console.log(`Could not find signature for ${file}`);
    }
  }

  // 3. Replace dataName with data
  const dataRegex = new RegExp(`\\b${dataName}\\b`, 'g');
  content = content.replace(dataRegex, 'data');

  fs.writeFileSync(filePath, content);
  console.log(`Refactored ${file}`);
});
