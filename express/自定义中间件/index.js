const express = require('express');
const qs = require('querystring');

const app = express();

app.use((req, res, next) => {
  let str = '';

  req.on('data', chunk => {
    str+=chunk;
  });

  // 数据接收完毕
  req.on('end', () => {
    // 完整的请求体数据
    // console.log(str); // username=bls&password=123456

    // 把字符串解析为对象
    const body = qs.parse(str);
    // console.log(body); // { username: 'bls', password: '123456' }
  
    // 把解析完的数据挂载到 req.body
    req.body = body;
  
    next();
  });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send(req.body)
});


app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});