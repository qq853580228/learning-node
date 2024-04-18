const express = require('express');

const app = express();

// 解析 json 数据
app.use(express.json());

// 解析 w-xxx-form-urlencoded 数据
// 当extended为false的时候，键值对中的值就为'String'或'Array'形式，

// 当extended为true的时候，则可为任何数据类型。

app.use(express.urlencoded({ extended: false }));

app.get('/user', (req, res) => {
  // 未配置 json 中间件 得到 undefined
  console.log(req.body);
  res.send('user ok')
});

app.post('/login', (req, res) => {
  // 未配置 urlencoded 中间件 得到 {}
  console.log(req.body);
  res.send('login ok')
});

app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});