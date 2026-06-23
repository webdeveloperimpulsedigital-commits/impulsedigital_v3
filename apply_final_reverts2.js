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

replaceInFile('searchEngineOptimisationData.ts', 
  /"headlineParts":\s*\[\s*"SEO Company in Thane.",\s*"Be Found First."\s*\],/m, 
  '"headlineParts": [\n      "Where Discovery Starts.",\n      "Where Search Is."\n    ],');
  
replaceInFile('searchEngineOptimisationData.ts', 
  /"headlineAccent":\s*"Be Found First.",/m, 
  '"headlineAccent": "Search Is.",');

replaceInFile('employerBrandingData.ts', 
  /"headlineParts":\s*\[\s*"Employer Branding",\s*"Agency"\s*\],/m, 
  '"headlineParts": [\n      "Why Should the Best Talent",\n      "Work Here?"\n    ],');
  
replaceInFile('employerBrandingData.ts', 
  /"headlineAccent":\s*"Agency",/m, 
  '"headlineAccent": "Before the Offer.",');
