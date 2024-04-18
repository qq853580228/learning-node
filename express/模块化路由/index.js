const express = require('express');

const app = express();

// 导入路由模块
const router = require('./router');

// 注册路由模块并添加路由前缀
app.use('/api/', router);

app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});