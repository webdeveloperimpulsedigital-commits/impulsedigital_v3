const fs = require('fs');

const content = fs.readFileSync('d:\\impulsedigital_v3\\schemas_extracted.txt', 'utf-8');

const regex = /(?:https?:\/\/[^\s]+)[\s\S]*?<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;

let match;
const schemasWithContext = [];

// A better approach: split by <script and then find URL in the preceding text
const parts = content.split('<script type="application/ld+json">');
for (let i = 1; i < parts.length; i++) {
    const precedingText = parts[i - 1].slice(-500); // Last 500 chars before the script tag
    const scriptContent = parts[i].split('</script>')[0];
    
    // Find URL in preceding text
    const urlMatch = precedingText.match(/https?:\/\/[^\s]+/);
    let url = urlMatch ? urlMatch[0] : null;

    try {
        const jsonStr = scriptContent.trim().replace(/&quot;/g, '"');
        const jsonObj = JSON.parse(jsonStr);
        
        // Use JSON url if available and valid
        if (jsonObj.url && jsonObj.url.startsWith('http')) {
            url = jsonObj.url;
        } else if (jsonObj['@id'] && jsonObj['@id'].startsWith('http')) {
            url = jsonObj['@id'].split('#')[0];
        }
        
        schemasWithContext.push({
            url: url || 'Unknown',
            type: jsonObj['@type'],
            schema: jsonObj
        });
    } catch (e) {
        console.error('Error parsing JSON');
    }
}

const summary = {};
schemasWithContext.forEach(item => {
    if (!summary[item.url]) summary[item.url] = [];
    summary[item.url].push(item.type);
});

console.log(JSON.stringify(summary, null, 2));
fs.writeFileSync('d:\\impulsedigital_v3\\schemas_parsed.json', JSON.stringify(schemasWithContext, null, 2));
