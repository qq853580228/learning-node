const express = require('express');
const path = require('path');

const app = express();

// 先配置ejs模板引擎
app.set('view engine', 'ejs');

// 设置模板文件存放位置
app.set('views', path.resolve(__dirname, './views'));

app.get('/home', (req, res) => {
  const text = '我是 bls 嘿嘿';
  res.render('home', { text });
});

app.listen('3002', () => {
  console.log('express server running at http://127.0.0.1:3002');
});