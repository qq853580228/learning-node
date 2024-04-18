const http = require('http');

const path = require('path');

const fs = require('fs');

const server = http.createServer();

server.on("request", (req, res) => {

  const { url } = req;

  console.log(url);

  // 把请求的 url 映射为文件的存放路径
  // const fPath = path.join(__dirname, 'path', url);

  let fPath = path.join(__dirname, 'path', url);
  
  if (url === '/') {
    fPath = path.join(__dirname, './path/index.html');
  }

  // 根据映射过来的路径读取文件的内容
  fs.readFile(fPath, 'utf-8', (err, data) => {
    if (err) {
      res.end('404 Not Found!');
    }
    console.log(data);
    res.end(data);
  });

});

server.listen('8080', () => {
  console.log('server is running at http://127.0.0.1:8080');
});
