const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { expressjwt } = require('express-jwt');

const secretKey = 'bls Learning Node.js';

const app = express();

// 解决接口跨域，一定要放在路由之前
app.use(cors()); // Access-Control-Allow-Origin: '*'

app.use(express.urlencoded({ extended: false}));

// 将 JWT 字符串解析还原成 JSON 对象的中间件，不需要访问权限 unless
// 使用req.user（req.auth）获取用户信息 --- 有权限的接口
app.use(expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }));

/* 
  jwt 参数
  第一个参数：用户信息
  第二个参数：加密的密钥
  第三个参数：可以配置当前 token 有效期
*/

app.post('/api/login', (req, res) => {
  const userInfo = req.body;

  if (userInfo.username !== 'admin' || userInfo.password !== '000000') {
    return res.send({
      status: -1,
      msg: '登录失败！',
    });
  }

  const token = jwt.sign({ username: userInfo.username }, secretKey, { expiresIn: '1m' });

  res.send({
    status: 200,
    msg: '登录成功！',
    token,
  });

});

app.get('/admin/userInfo', (req, res) => {
  console.log(req.user);
  res.send({
    status: 200,
    msg: '获取信息成功！',
    data: req.auth,
  });
});

app.use((err, req, res, next) => {

  // token 无效
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: -1,
      mgs: 'token无效！',
    });
  }

  res.send({
    status: 500,
    mgs: err.message,
  });

  next();
});

app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});