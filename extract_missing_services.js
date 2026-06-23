const { execSync } = require('child_process');
const fs = require('fs');

const missingFiles = [
  'alwaysOnIntelligenceData.ts',
  'aiVideoProductionData.ts',
  'generativeSearchOptimisationData.ts',
  'searchEngineOptimisationData.ts',
  'socialMediaManagementData.ts',
  'websiteDevelopmentData.ts',
  'employerBrandingData.ts'
];

try {
  let markdown = '# Heading Changes Review for Remaining Files\n\n';
  
  for (const file of missingFiles) {
    try {
      const diffOutput = execSync(`git log -p 529b402b7d..HEAD -- data/${file}`, { encoding: 'utf8', maxBuffer: 1024 * 1024 * 10 });
      if (!diffOutput) continue;
      
      const lines = diffOutput.split('\n');
      let oldChanges = [];
      let newChanges = [];
      
      const headingRegex = /^([-+])(?!\s*[-+]).*?['"]?(title|headlineAccent|headlineParts)['"]?\s*:\s*(.*)/i;
      
      let inOldHeadlineParts = false;
      let inNewHeadlineParts = false;
      let oldHeadlineParts = [];
      let newHeadlineParts = [];
      
      for (let line of lines) {
        if (line.match(/^([-+])(?!\s*[-+]).*?headlineHtml/i)) continue;
        
        const match = line.match(headingRegex);
        if (match) {
          const type = match[1] === '+' ? 'NEW' : 'OLD';
          const key = match[2];
          const valueRaw = match[3];
          
          if (key === 'headlineParts' || key === '"headlineParts"') {
            if (type === 'NEW') inNewHeadlineParts = true;
            else inOldHeadlineParts = true;
            continue;
          }
          
          if (type === 'NEW') newChanges.push({key, value: valueRaw});
          else oldChanges.push({key, value: valueRaw});
        }
        
        if (inOldHeadlineParts) {
          if (line.match(/\]/)) inOldHeadlineParts = false;
          else if (line.startsWith('-')) oldHeadlineParts.push(line.replace('-', '').trim());
        }
        if (inNewHeadlineParts) {
          if (line.match(/\]/)) inNewHeadlineParts = false;
          else if (line.startsWith('+')) newHeadlineParts.push(line.replace('+', '').trim());
        }
      }
      
      if (oldHeadlineParts.length > 0) oldChanges.push({key: 'headlineParts', value: `[ ${oldHeadlineParts.join(', ')} ]`});
      if (newHeadlineParts.length > 0) newChanges.push({key: 'headlineParts', value: `[ ${newHeadlineParts.join(', ')} ]`});
      
      if (oldChanges.length > 0 || newChanges.length > 0) {
        markdown += `## data/${file}\n\n`;
        markdown += '| Key | Old Heading | New Heading |\n';
        markdown += '|-----|-------------|-------------|\n';
        
        let processedNews = new Set();
        for (let old of oldChanges) {
          let matchNew = newChanges.find(n => n.key === old.key && !processedNews.has(n));
          let newVal = matchNew ? matchNew.value : '(Removed/Unchanged)';
          if (matchNew) processedNews.add(matchNew);
          
          if (old.value !== newVal) {
            markdown += `| ${old.key} | ${old.value} | ${newVal} |\n`;
          }
        }
        markdown += '\n';
      }
    } catch (e) {}
  }
  
  fs.writeFileSync('C:/Users/AAA RENTAL LLP/.gemini/antigravity-ide/brain/c375acd1-2c6a-445b-9e0a-7313037cfabb/scratch/missing_headings.md', markdown);
  console.log('Done!');
} catch (e) {
  console.error(e);
}
