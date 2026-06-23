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
      
      let fileContent = fs.readFileSync(`C:/Users/AAA RENTAL LLP/Desktop/impulsedigital_v3/data/${file}`, 'utf8');
      let modifications = 0;
      
      let processedNews = new Set();
      for (let old of oldChanges) {
        let matchNew = newChanges.find(n => n.key === old.key && !processedNews.has(n));
        if (matchNew && old.value !== matchNew.value) {
          processedNews.add(matchNew);
          // Let's strip trailing commas for the search
          let sVal = matchNew.value.replace(/,$/, '');
          let rVal = old.value.replace(/,$/, '');
          
          // Revert!
          if (matchNew.key === 'headlineParts') {
            // we have an array representation
            // let's do a simpler regex replace
             fileContent = fileContent.replace(/"headlineParts": \[\s*".*?",\s*".*?"\s*\]/m, `"headlineParts": [\n      ${oldHeadlineParts.join(',\n      ')}\n    ]`);
             fileContent = fileContent.replace(/headlineParts: \[\s*".*?",\s*".*?"\s*\]/m, `headlineParts: [\n      ${oldHeadlineParts.join(',\n      ')}\n    ]`);
             modifications++;
          } else {
             const searchStr = `"${matchNew.key}": ${sVal}`;
             const searchStrUnq = `${matchNew.key}: ${sVal}`;
             const replaceStr = `"${matchNew.key}": ${rVal}`;
             const replaceStrUnq = `${matchNew.key}: ${rVal}`;
             
             if (fileContent.includes(searchStr)) { fileContent = fileContent.replace(searchStr, replaceStr); modifications++; }
             else if (fileContent.includes(searchStrUnq)) { fileContent = fileContent.replace(searchStrUnq, replaceStrUnq); modifications++; }
             else {
               // try just value
               if (fileContent.includes(sVal)) { fileContent = fileContent.replace(sVal, rVal); modifications++; }
             }
          }
        }
      }
      
      if (modifications > 0) {
        fs.writeFileSync(`C:/Users/AAA RENTAL LLP/Desktop/impulsedigital_v3/data/${file}`, fileContent);
        console.log(`Reverted ${modifications} headings in ${file}`);
      } else {
        console.log(`No reversions needed or found in ${file}`);
      }
      
    } catch (e) {
      console.log(`Error processing ${file}: ${e.message}`);
    }
  }
} catch (e) {
  console.error(e);
}
