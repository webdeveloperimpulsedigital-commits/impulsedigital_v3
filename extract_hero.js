const { execSync } = require('child_process');

const files = [
  'archerAiData.ts',
  'agenticAiData.ts',
  'consumerIntelligenceData.ts',
  'marketIntelligenceData.ts',
  'campaignIntelligenceData.ts',
  'brandingData.ts',
  'videoProductionData.ts'
];

try {
  let output = "";
  for (const file of files) {
    try {
      const diff = execSync(`git diff 9beb9a1ac6..HEAD data/${file}`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
      if (!diff) continue;
      
      const lines = diff.split('\n');
      let found = false;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('headlineParts') || line.includes('headlineAccent')) {
          if (!found) {
             output += `\n--- ${file} ---\n`;
             found = true;
          }
          output += line + '\n';
        }
      }
    } catch (e) {
      console.log(`Failed for ${file}`);
    }
  }
  
  console.log(output);
} catch (e) {
  console.error(e);
}
