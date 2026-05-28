const https = require('https');
https.get('https://www.theimpulsedigital.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('Your Data Knows');
    if (idx !== -1) {
      console.log(data.substring(Math.max(0, idx - 200), idx + 500));
    } else {
      console.log('Not found');
    }
  });
}).on('error', (e) => {
  console.error(e);
});
