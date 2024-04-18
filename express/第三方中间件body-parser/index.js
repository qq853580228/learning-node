const express = require('express');

const app = express();

// 导入第三方中间件 body-parser
const parser = require('body-parser');

// 注册中间件
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.get('/user', (req, res) => {
  console.log(req.body);
  res.send('user ok')
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('login ok')
});

app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});