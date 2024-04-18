const express = require('express');

const app = express();

const bodyParser = require('./bodyParser');

app.use(bodyParser);

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send(req.body)
});


app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});