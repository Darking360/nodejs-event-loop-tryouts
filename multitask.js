const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 5;

function doRequest(index) {
  https.request('https://www.google.com', (res) => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log(`HTTPS - ${index}: `, Date.now() - start);
    });
  }).end();
}

function doHash(index) {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`Hash - ${index}: `, Date.now() - start);
  });
}

doRequest(1);

fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS: ', Date.now() - start);
});

doHash(1);
doHash(2);
doHash(3);
doHash(4);