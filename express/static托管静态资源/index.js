// 导入
const express = require('express');
const path = require('path');

// 创建 web 服务器
const app = express();

// 调用 express.static()，快速对外提供静态资源
// app.use(express.static(path.join(__dirname, '../../', '/files/path')));
// app.use(express.static('./files/path'));

// 挂载路径前缀 并且 托管多个静态资源
app.use('/test', express.static('./express/static托管静态资源/test'));
app.use('/user', express.static('./express/static托管静态资源/user'));

// 启动 web 服务器

app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});