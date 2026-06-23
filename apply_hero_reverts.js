const fs = require('fs');
const path = require('path');

const replaceInFile = (file, searchRegex, replaceStr) => {
  const filepath = path.join('C:/Users/AAA RENTAL LLP/Desktop/impulsedigital_v3/data', file);
  let content = fs.readFileSync(filepath, 'utf8');
  if (searchRegex.test(content)) {
    content = content.replace(searchRegex, replaceStr);
    fs.writeFileSync(filepath, content);
    console.log(`Replaced in ${file}`);
  } else {
    console.log(`Not found in ${file}`);
  }
};

replaceInFile('archerAiData.ts', 
  /headlineParts:\s*\[\s*"AI Outbound Sales Agent",\s*"Built for B2B Growth"\s*\],/m, 
  'headlineParts: ["Find Buyers Before", "They Start Looking."],');
replaceInFile('archerAiData.ts', 
  /headlineAccent:\s*"Built for B2B Growth",/m, 
  'headlineAccent: "They Start Looking.",');

replaceInFile('agenticAiData.ts', 
  /headlineParts:\s*\[\s*"Agentic AI Agency",\s*"That Moves Work Forward."\s*\],/m, 
  'headlineParts: ["AI That Follows", "Through."],');
replaceInFile('agenticAiData.ts', 
  /headlineAccent:\s*"That Moves Work Forward.",/m, 
  'headlineAccent: "Through.",');

replaceInFile('consumerIntelligenceData.ts', 
  /headlineParts:\s*\[\s*"Customer Intelligence",\s*"Service"\s*\],/m, 
  'headlineParts: ["Stop Building for the", "Consumer You Imagine."],');
replaceInFile('consumerIntelligenceData.ts', 
  /headlineAccent:\s*"Service",/m, 
  'headlineAccent: "Consumer You Imagine.",');

replaceInFile('marketIntelligenceData.ts', 
  /headlineParts:\s*\[\s*"Market & Competitive",\s*"Intelligence Service"\s*\],/m, 
  'headlineParts: ["Don\'t Let the Market", "Surprise You."],');
replaceInFile('marketIntelligenceData.ts', 
  /headlineAccent:\s*"Intelligence Service",/m, 
  'headlineAccent: "Surprise You.",');

replaceInFile('campaignIntelligenceData.ts', 
  /headlineParts:\s*\[\s*"Campaign & Performance",\s*"Intelligence Agency"\s*\],/m, 
  'headlineParts: ["Views Are Not", "Victory."],');
replaceInFile('campaignIntelligenceData.ts', 
  /headlineAccent:\s*"Intelligence Agency",/m, 
  'headlineAccent: "Victory.",');

replaceInFile('brandingData.ts', 
  /"headlineParts":\s*\[\s*"Best Branding Agency",\s*"In Mumbai"\s*\],/m, 
  '"headlineParts": [\n      "Forgotten Brands Don\'t",\n      "Get Chosen."\n    ],');
replaceInFile('brandingData.ts', 
  /"headlineAccent":\s*"In Mumbai",/m, 
  '"headlineAccent": "Get Chosen.",');

replaceInFile('videoProductionData.ts', 
  /headlineParts:\s*\[\s*"#1 Video Production",\s*"Company in Mumbai."\s*\],/m, 
  'headlineParts: ["The Right Video Does More", "Than Look Good."],');
replaceInFile('videoProductionData.ts', 
  /headlineAccent:\s*"Company in Mumbai.",/m, 
  'headlineAccent: "Than Look Good.",');

