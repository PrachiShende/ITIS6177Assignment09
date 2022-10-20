const express = require('express');
const app = express();
const axios = require('axios');
const https = require('https');
const port = 3000;


app.get('/say', function(req,res) {
        
        console.log(req.query.keyword);
        https.get('https://r3yxt9eb9a.execute-api.us-east-2.amazonaws.com/default/function?keyword='+req.query.keyword, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
    res.write(data);
    res.end();
  });

})
      
});

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`);
});