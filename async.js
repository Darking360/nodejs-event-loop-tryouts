const https = require('https');

const start = Date.now();

function doRequest(index) {
  https.request('https://www.google.com', (res) => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log(`${index}: `, Date.now() - start);
    });
  }).end();
}

doRequest(1);
doRequest(2);
doRequest(3);
doRequest(4);
doRequest(5);
doRequest(6);