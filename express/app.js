const express = require('express');

const app = express();

const session = require('express-session');

app.use(express.urlencoded({ extended: false}));

app.use(session({
  // name - cookie的名字（原属性名为 key）。（默认：’connect.sid’）
  // store - session存储实例
  // secret - 用它来对session cookie签名，防止篡改（必填项）
  // cookie - session cookie设置 （默认：{ path: ‘/‘, httpOnly: true,secure: false, maxAge: null }）
  // genid - 生成新session ID的函数 （默认使用uid2库）
  // rolling - 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  // resave - 强制保存session即使它并没有变化 （默认： true）
  // proxy - 当设置了secure cookies（通过”x-forwarded-proto” header ）时信任反向代理。当设定为true时，
  // ”x-forwarded-proto” header 将被使用。当设定为false时，所有headers将被忽略。当该属性没有被设定时，将使用Express的trust proxy。
  // saveUninitialized - 强制将未初始化的session存储。当新建了一个session且未设定属性或值时，它就处于未初始化状态。在设定一个cookie前，这对于登陆验证，减轻服务端存储压力，权限控制是有帮助的。（默认：true）
  // unset - 控制req.session是否取消（例如通过 delete，或者将它的值设置为null）。这可以使session保持存储
  // 状态但忽略修改或删除的请求（默认：keep）
  secret: 'blsSession',
  resave: false,
  saveUninitialized: true,
}));

app.get('/api/getUserName', (req, res) => {
  if (req.session.isLogin) {
    return res.send({ status: -1, msg: '请先登录！' });
  }
  res.send({ status: 200, msg: 'success', data: { username: req.session.user.username } });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username !== 'admin' || password !== '000000') {
    return res.send({ status: -1, msg: '账号或密码错误！' });
  }
  // 只有配置了 express-session 中间件，才能通过 req.session 访问
  req.session.user = req.body;
  req.session.isLogin = true;
  res.send({ status: 200, msg: '登录成功！' });
});

app.post('/api/logout', (req, res) => {
  // 清空 session
  req.session.destroy();
  res.send({ status: 200, msg: '退出登录成功！' });
});

app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});