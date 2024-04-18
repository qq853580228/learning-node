// 导入
const express = require('express');

// 创建 web 服务器
const app = express();

// 监听客户端的 get 和 post 的请求
app.get('/user', (req, res) => {
  // send 向客户端响应一个 json 对象
  console.log(req.query);
  res.send({ name: 'bls', age: 18 });
});

app.post('/user/add', (req, res) => {
  // req.query // 默认为 {}，是请求对象
  console.log(req.query);
  res.send({ status: 200, message: '添加成功！' });
});

app.delete('/user/delete/:id', (req, res) => {
  // req.params 获取动态参数
  console.log(req.params);
  res.send({ status: 200, message: '删除成功！' });
});

// 启动 web 服务器

app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});