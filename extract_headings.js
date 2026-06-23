const { execSync } = require('child_process');
const fs = require('fs');

try {
  // Get the diff from 9beb9a1ac6 to the current working tree for all data files
  const diffOutput = execSync('git diff 9beb9a1ac6 -- data/', { encoding: 'utf8', maxBuffer: 1024 * 1024 * 10 });
  
  const lines = diffOutput.split('\n');
  
  let currentFile = '';
  let headingsChanges = {};
  
  for (let line of lines) {
    if (line.startsWith('diff --git')) {
      const parts = line.split(' ');
      currentFile = parts[2].replace('a/', '');
      headingsChanges[currentFile] = [];
    }
    
    // Look for lines that added or removed headings
    // Keys can be quoted or unquoted: title: "..." or "title": "..."
    const headingRegex = /^[-+](?!\s*[-+]).*?['"]?(title|headline|subHeadline|q|question)['"]?\s*:\s*['"](.*?)['"]/i;
    const match = line.match(headingRegex);
    
    if (match) {
      headingsChanges[currentFile].push({
        type: line.startsWith('+') ? 'NEW' : 'OLD',
        key: match[1],
        value: match[2],
        raw: line.trim()
      });
    }
  }
  
  // Format the output
  let markdown = '# Heading Changes Review\n\n';
  markdown += 'Here are all the heading changes found in the Services data files. Please review these changes. If you approve, I can replace the current new headings with the old ones, or vice versa, based on your instruction.\n\n';
  
  for (const file in headingsChanges) {
    if (headingsChanges[file].length > 0) {
      // Filter to see if there are any ACTUAL replacements (not just pure additions of new FAQ questions without old ones)
      let oldChanges = headingsChanges[file].filter(c => c.type === 'OLD');
      let newChanges = headingsChanges[file].filter(c => c.type === 'NEW');
      
      if (oldChanges.length > 0 || newChanges.length > 0) {
        markdown += `## ${file}\n\n`;
        markdown += '| Key | Old Heading (To Revert To) | New Heading (Current) |\n';
        markdown += '|-----|----------------------------|-----------------------|\n';
        
        // Simple alignment logic: group by key if possible
        let processedNews = new Set();
        
        for (let old of oldChanges) {
          // Find matching new by key
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
    }
  }
  
  fs.writeFileSync('C:/Users/AAA RENTAL LLP/.gemini/antigravity-ide/brain/c375acd1-2c6a-445b-9e0a-7313037cfabb/headings_review.md', markdown);
  console.log('Successfully wrote headings_review.md');
  
} catch (e) {
  console.error(e);
}
