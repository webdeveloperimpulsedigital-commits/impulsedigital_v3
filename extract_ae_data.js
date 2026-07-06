const { execSync } = require('child_process');
const fs = require('fs');

const files = [
  'agenticAiData.ts', 'aiVideoProductionData.ts', 'alwaysOnIntelligenceData.ts',
  'archerAiData.ts', 'brandingData.ts', 'campaignIntelligenceData.ts',
  'consumerIntelligenceData.ts', 'employerBrandingData.ts',
  'generativeSearchOptimisationData.ts', 'marketIntelligenceData.ts',
  'searchEngineOptimisationData.ts', 'socialMediaManagementData.ts',
  'videoProductionData.ts', 'websiteDevelopmentData.ts'
];

if (!fs.existsSync('data/ae')) {
  fs.mkdirSync('data/ae');
}

files.forEach(f => {
  try {
    const data = execSync(`git show 4b116394d98243e434df651c7aab8396d78fe125:data/${f}`);
    fs.writeFileSync(`data/ae/${f}`, data);
  } catch (e) {
    console.error(`Failed on ${f}`);
  }
});
console.log('Done extracting UAE data');
