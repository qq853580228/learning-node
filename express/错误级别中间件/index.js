const express = require('express');

const app = express();

app.get('/user', (req, res) => {
  throw new Error('抛出错误');
  res.send('User Page')
});

/* 
  错误级别中间件必须写在所有路由之后
*/
app.use((err, req, res, next) => {
  res.send(err.message)
});

app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});