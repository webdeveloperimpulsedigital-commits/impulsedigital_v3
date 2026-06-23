const fs = require('fs');

const replaceInFile = (file, searchRegex, replaceStr) => {
  const path = `C:/Users/AAA RENTAL LLP/Desktop/impulsedigital_v3/data/${file}`;
  let content = fs.readFileSync(path, 'utf8');
  if (searchRegex.test(content)) {
    content = content.replace(searchRegex, replaceStr);
    fs.writeFileSync(path, content);
    console.log(`Replaced in ${file}`);
  } else {
    console.log(`Not found in ${file}`);
  }
};

replaceInFile('brandingData.ts', /Mumbai's Branding Agency Built to Make Your Brand Easier to Recall/m, "Built to Make Your Brand Easier to Recall");
