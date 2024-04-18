const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  // req 是请求对象，它包含了客户端相关数据和属性
  // url 是客户端请求的 url 地址
  // method 是客户端 method 请求的类型
  const { url, method } = req;
  const str = `您好，Your request url is ${url} and request method is ${method}`;
  console.log(str);
  // res.end 向客户端发送指定内容，并结束此次请求
  // 发送中文内容会出现乱码，需要设置相应头 Content-Type
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(str);
});

server.listen('8080', () => {
  console.log('server is running at http://127.0.0.1:8080');
});