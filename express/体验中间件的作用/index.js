const express = require('express');

const app = express();

// 定义最简单的中间件函数，必须包含 next 函数
// 上一个中间件的输出值是下一个中间件的输入值
const mw = function(req, res, next) {
  // 获取请求到达服务器的时间
  const now = Date.now();

  // 为 req 挂载自定义属性，从而把时间共享给后面所有的路由
  req.startTime = now;

  // 把流转关系，转交给下一个中间件或函数
  next();
}

// 将 mw 注册为全局生效的中间件
app.use(mw);

app.get('/', (req, res) => {
  res.send('Home Page --- ' + req.startTime);
});

app.get('/user', (req, res) => {
  res.send('User Page')
});

app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});