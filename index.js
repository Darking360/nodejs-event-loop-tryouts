const express = require("express");
const crypto = require('crypto');
const Worker = require('webworker-threads').Worker;
const app = express();

app.get('/', (req, res) => {
  
  var worker = new Worker(function(){
    this.onmessage = function(event) {
      let counter = 0;
      while(counter < 1e6) {
        counter++;
      }
      postMessage(counter);
      self.close();
    };
  });
  worker.onmessage = function(event) {
    res.send('' + event.data);
  };
  worker.postMessage();
  
});

app.get('/fast', (req,res) => {
  res.send('This was fast');
});

app.listen(3000, () => {
  console.log('Magic happening on port 3000');
});