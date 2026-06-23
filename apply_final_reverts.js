const fs = require('fs');

const replaceInFile = (file, oldStr, newStr) => {
  const path = `C:/Users/AAA RENTAL LLP/Desktop/impulsedigital_v3/data/${file}`;
  let content = fs.readFileSync(path, 'utf8');
  if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    fs.writeFileSync(path, content);
    console.log(`Replaced in ${file}`);
  } else {
    console.log(`Not found in ${file}`);
  }
};

// searchEngineOptimisationData.ts
replaceInFile('searchEngineOptimisationData.ts', 
  `    "headlineParts": [\n      "SEO Company in Thane.",\n      "Be Found First."\n    ],`,
  `    "headlineParts": [\n      "Where Discovery Starts.",\n      "Where Search Is."\n    ],`);

replaceInFile('searchEngineOptimisationData.ts', 
  `"headlineAccent": "Be Found First.",`,
  `"headlineAccent": "Search Is.",`);

// employerBrandingData.ts
replaceInFile('employerBrandingData.ts', 
  `    "headlineParts": [\n      "Employer Branding",\n      "Agency"\n    ],`,
  `    "headlineParts": [\n      "Why Should the Best Talent",\n      "Work Here?"\n    ],`);
  
replaceInFile('employerBrandingData.ts', 
  `"headlineAccent": "Agency",`,
  `"headlineAccent": "Before the Offer.",`);

// aiVideoProductionData.ts
replaceInFile('aiVideoProductionData.ts', 
  `    headlineParts: ["AI Video", "Production Agency"],`,
  `    headlineParts: ["Imagine More.", "Produce Faster."],`);

replaceInFile('aiVideoProductionData.ts', 
  `    headlineAccent: "Production Agency",`,
  `    headlineAccent: "Produce Faster.",`);

// aiVideoProductionData.ts titles that might have been missed
replaceInFile('aiVideoProductionData.ts',
  `    title: "Why Choose Impulse Digital for AI Video Production Agency",`,
  `    title: "Built to Make Video Easier to Scale",`);
  
replaceInFile('aiVideoProductionData.ts',
  `    title: "What Our AI Video Production Services Include",`,
  `    title: "Where AI Video Creates Business Leverage",`);

