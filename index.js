const cluster = require('cluster');

// Is the file being executed in master mode?
if (cluster.isMaster) {
  // Cause index.js to be executed again but in child mode
  cluster.fork();
} else {
  // I'm a child, I'm going to act like a server
  const express = require("express");
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while(Date.now() - start < duration) {}
  }

  app.get('/', (req, res) => {
    doWork(10000);
    res.send('Hello there!');
  });

  app.get('/fast', (req,res) => {
    res.send('This was fast');
  });

  app.listen(3000, () => {
    console.log('Magic happening on port 3000');
  });
}

