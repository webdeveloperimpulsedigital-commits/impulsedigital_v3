const http = require('http');
http.get('http://localhost:3000/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const h1s = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
    console.log('H1 tags found:', h1s ? h1s.length : 0);
    if (h1s) console.log(h1s);
  });
});
