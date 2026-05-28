const https = require('https');
const options = {
  hostname: 'www.theimpulsedigital.com',
  port: 443,
  path: '/',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  }
};
const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('Your Data Knows');
    if (idx !== -1) {
      console.log(data.substring(Math.max(0, idx - 100), idx + 200));
    } else {
      console.log('Not found');
    }
  });
});
req.on('error', (e) => {
  console.error(e);
});
req.end();
