const fs = require('fs');
const path = require('path');

const targetFiles = [
  'consumerIntelligenceData.ts',
  'marketIntelligenceData.ts',
  'campaignIntelligenceData.ts',
  'archerAiData.ts',
  'agenticAiData.ts',
  'videoProductionData.ts',
  'brandingData.ts'
];

try {
  // We'll read the markdown we generated
  const mdContent = fs.readFileSync('C:/Users/AAA RENTAL LLP/.gemini/antigravity-ide/brain/c375acd1-2c6a-445b-9e0a-7313037cfabb/headings_review_services.md', 'utf8');
  const sections = mdContent.split('## data/');
  
  for (let i = 1; i < sections.length; i++) {
    const lines = sections[i].split('\n');
    const filename = lines[0].trim();
    
    if (!targetFiles.includes(filename)) continue;
    
    const filePath = path.join('C:/Users/AAA RENTAL LLP/Desktop/impulsedigital_v3/data', filename);
    let fileContent = fs.readFileSync(filePath, 'utf8');
    
    let modifications = 0;
    
    for (let j = 0; j < lines.length; j++) {
      const line = lines[j];
      if (line.startsWith('| title |') || line.startsWith('| Title |') || line.startsWith('| headline |') || line.startsWith('| subHeadline |')) {
        const parts = line.split('|').map(s => s.trim());
        const key = parts[1];
        const oldValRaw = parts[2];
        const newValRaw = parts[3];
        
        // Remove <br/> logic since in the file it's likely \n
        const oldVal = oldValRaw.replace(/<br\/>/g, '\\n').replace(/\\\|/g, '|');
        const newVal = newValRaw.replace(/<br\/>/g, '\\n').replace(/\\\|/g, '|');
        
        // Let's create a regex to replace the exact new value with the exact old value for this key
        // E.g., title: "New Val" -> title: "Old Val"
        // Since we don't want to use regex that might fail on special chars, we'll construct it carefully
        const searchStr = `"${key}": "${newVal}"`;
        const searchStrUnquoted = `${key}: "${newVal}"`;
        const replaceStr = `"${key}": "${oldVal}"`;
        const replaceStrUnquoted = `${key}: "${oldVal}"`;
        
        if (fileContent.includes(searchStr)) {
          fileContent = fileContent.replace(searchStr, replaceStr);
          modifications++;
        } else if (fileContent.includes(searchStrUnquoted)) {
          fileContent = fileContent.replace(searchStrUnquoted, replaceStrUnquoted);
          modifications++;
        } else {
          console.log(`Could not find string in ${filename}: ${searchStrUnquoted}`);
          // Fallback, let's try replacing just the value
          if (fileContent.includes(`"${newVal}"`)) {
             fileContent = fileContent.replace(`"${newVal}"`, `"${oldVal}"`);
             modifications++;
          }
        }
      }
    }
    
    if (modifications > 0) {
      fs.writeFileSync(filePath, fileContent);
      console.log(`Updated ${filename} (${modifications} changes)`);
    } else {
      console.log(`No changes made to ${filename}`);
    }
  }
} catch (e) {
  console.error(e);
}
