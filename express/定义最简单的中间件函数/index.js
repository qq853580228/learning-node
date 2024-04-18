const express = require('express');

const app = express();

// 定义最简单的中间件函数，必须包含 next 函数
// 上一个中间件的输出值是下一个中间件的输入值
const mw = function(req, res, next) {
  console.log('全局中间件 start');
  // 把流转关系，转交给下一个中间件或函数
  next();
  console.log('全局中间件 end');
}

// 将 mw 注册为全局生效的中间件
app.use(mw);

app.get('/', (req, res) => {
  console.log('Home Page Start');
  res.send('Home Page')
  console.log('Home Page End');
});

/* 
  console.log('全局中间件 start');
  console.log('Home Page Start');
  console.log('Home Page End');
  console.log('全局中间件 end');
*/

app.get('/user', (req, res) => {
  res.send('User Page')
});

app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});

/* 
  中间件的注意事项
  1、一定要在路由之前注册中间件
  2、客户端发送过来的请求，可以连续调用多个中间件进行处理
  3、执行完中间件的业务代码之后，一定要调用 next() 函数
  4、为了防止代码逻辑混乱，调用 next() 函数后不要写额外的代码
  5、连续调用多个中间件，多个中间件之间共享 req 和 res 
*/