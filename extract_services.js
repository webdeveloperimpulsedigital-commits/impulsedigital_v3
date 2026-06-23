const { execSync } = require('child_process');
const fs = require('fs');

const targetFiles = [
  'consumerIntelligenceData.ts',
  'marketIntelligenceData.ts',
  'alwaysOnIntelligenceData.ts',
  'campaignIntelligenceData.ts',
  'archerAiData.ts',
  'agenticAiData.ts',
  'videoProductionData.ts',
  'generativeSearchOptimisationData.ts',
  'searchEngineOptimisationData.ts',
  'socialMediaManagementData.ts',
  'websiteDevelopmentData.ts',
  'brandingData.ts',
  'employerBrandingData.ts'
];

try {
  let markdown = '# Heading Changes Review (Services)\n\n';
  markdown += 'Here are all the heading changes made recently for the main Services pages (excluding SEO Locations).\n\n';
  
  for (const file of targetFiles) {
    try {
      const diffOutput = execSync(`git log -p 9beb9a1ac6..HEAD -- data/${file}`, { encoding: 'utf8', maxBuffer: 1024 * 1024 * 10 });
      if (!diffOutput) continue;
      
      const lines = diffOutput.split('\n');
      let oldChanges = [];
      let newChanges = [];
      
      const headingRegex = /^([-+])(?!\s*[-+]).*?['"]?(title|headline|subHeadline|q|question)['"]?\s*:\s*['"](.*?)['"]/i;
      
      for (let line of lines) {
        const match = line.match(headingRegex);
        if (match) {
          const type = match[1] === '+' ? 'NEW' : 'OLD';
          const key = match[2];
          const value = match[3];
          
          if (type === 'NEW') newChanges.push({key, value});
          else oldChanges.push({key, value});
        }
      }
      
      if (oldChanges.length > 0 || newChanges.length > 0) {
        markdown += `## data/${file}\n\n`;
        markdown += '| Key | Old Heading (To Revert To) | New Heading (Current) |\n';
        markdown += '|-----|----------------------------|-----------------------|\n';
        
        let processedNews = new Set();
        
        for (let old of oldChanges) {
          let matchNew = newChanges.find(n => n.key === old.key && !processedNews.has(n));
          let newVal = matchNew ? matchNew.value : '(Removed)';
          if (matchNew) processedNews.add(matchNew);
          
          if (old.value !== newVal) {
            markdown += `| ${old.key} | ${old.value} | ${newVal} |\n`;
          }
        }
        
        for (let n of newChanges) {
          if (!processedNews.has(n)) {
            markdown += `| ${n.key} | (Added, no old version) | ${n.value} |\n`;
          }
        }
        markdown += '\n';
      }
    } catch (e) {
      // file might not exist in git log or error
    }
  }
  
  fs.writeFileSync('C:/Users/AAA RENTAL LLP/.gemini/antigravity-ide/brain/c375acd1-2c6a-445b-9e0a-7313037cfabb/headings_review_services.md', markdown);
  console.log('Successfully wrote headings_review_services.md');
  
} catch (e) {
  console.error(e);
}
