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
  /"headlineParts":\s*\[\s*"#1 SEO Company in Thane.",\s*"Be Found First."\s*\],/m, 
  '"headlineParts": [\n      "Where Discovery Starts.",\n      "Where Search Is."\n    ],');
  
replaceInFile('socialMediaManagementData.ts', 
  /"headlineParts":\s*\[\s*"#1 Social Media Marketing",\s*"Agency in Mumbai"\s*\],/m, 
  '"headlineParts": [\n      "Your Feed Should Not",\n      "Feel Like Attendance."\n    ],');

replaceInFile('websiteDevelopmentData.ts', 
  /"headlineParts":\s*\[\s*"Website Development",\s*"Company in Mumbai"\s*\],/m, 
  '"headlineParts": [\n      "Look Good. Perform Well.",\n      "Still Lose the Buyer."\n    ],');

replaceInFile('employerBrandingData.ts', 
  /"headlineParts":\s*\[\s*"Employer Branding",\s*"Company in Mumbai"\s*\],/m, 
  '"headlineParts": [\n      "Why Should the Best Talent",\n      "Work Here?"\n    ],');

replaceInFile('generativeSearchOptimisationData.ts', 
  /"headlineParts":\s*\[\s*"AI SEO Agency",\s*"for Generative Search."\s*\],/m, 
  '"headlineParts": [\n      "You\'re Not Just Fighting",\n      "for Rank Anymore."\n    ],');

replaceInFile('aiVideoProductionData.ts', 
  /"headlineParts":\s*\[\s*"AI Video Production",\s*"Company in Mumbai"\s*\],/m, 
  '"headlineParts": [\n      "If Imagination",\n      "Is A Variable."\n    ],');

