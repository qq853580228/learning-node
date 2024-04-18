const express = require('express');
const cors = require('cors');
const router = require('./apiRouter');

const app = express();

// 如果项目中已经配置了 cors，为了防止冲突，必须在配置 cors 中间件之前声明 jsonp 接口
app.get('/api/jsonp', (req, res) => {
  // 1、获取客户端发送过来的回调函数的名字
  const callback = req.query.callback;
  // 2、得到要通过 jsonp 形式发送给客户端的数据
  const data = { username: 'bls', password: '123456' };
  // 3、根据前面两步，拼接出函数调用的字符串
  const scriptStr = `${callback}(${JSON.stringify(data)})`;
  // 4、把上一步拼接得到的字符串，相应给客户端的 script 标签进行解析
  res.send(scriptStr);
});

// 解决接口跨域，一定要放在路由之前
app.use(cors()); // Access-Control-Allow-Origin: '*'

app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen('9001', () => {
  console.log('express server running at http://127.0.0.1:9001');
});