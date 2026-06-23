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

replaceInFile('consumerIntelligenceData.ts', /Use Customer Intelligence Consultant Before[\s\S]*?Assumption Becomes Strategy/m, "Use Consumer Intelligence Before\\nAssumption Becomes Strategy");
replaceInFile('consumerIntelligenceData.ts', /Customer Intelligence[\s\S]*?Is Right for You If/m, "Consumer Intelligence\\nIs Right for You If");
replaceInFile('consumerIntelligenceData.ts', /Customer Intelligence Services \| Impulse Digital/m, "Consumer Intelligence Services | Impulse Digital");

replaceInFile('marketIntelligenceData.ts', /How Impulse Digital Works as a[\s\S]*?Market Intelligence Agency/m, "Impulse Digital Connects the Signals\\nOthers Read Separately");
replaceInFile('marketIntelligenceData.ts', /Market and Competitive[\s\S]*?Intelligence Service Is Right[\s\S]*?for You If/m, "Market and Competitive\\nIntelligence Is Right\\nfor You If");

replaceInFile('campaignIntelligenceData.ts', /The Report Has Numbers\.[\s\S]*?Performance Intelligence Gives Answers\./m, "The Report Has Numbers.\\nThe Brand Needs Answers.");

replaceInFile('brandingData.ts', /title: "Mumbai"/m, "title: \"Built to Make Your Brand Easier to Recall\"");
