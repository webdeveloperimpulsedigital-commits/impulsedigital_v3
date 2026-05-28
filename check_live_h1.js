const https = require('https');
https.get('https://www.theimpulsedigital.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const h1s = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
    console.log('H1 tags found on LIVE:', h1s ? h1s.length : 0);
    if (h1s) console.log(h1s);
  });
}).on('error', (e) => {
  console.error(e);
});
