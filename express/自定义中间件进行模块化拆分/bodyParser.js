const qs = require('querystring');

function bodyParser(req, res, next) {
  let str = '';

  req.on('data', chunk => {
    str+=chunk;
  });

  // 数据接收完毕
  req.on('end', () => {
    // 完整的请求体数据
    // console.log(str); // username=bls&password=123456
    
    // 把字符串解析为对象
    const body = qs.parse(str);
    // console.log(body); // { username: 'bls', password: '123456' }
  
    // 把解析完的数据挂载到 req.body
    req.body = body;
  
    next();
  });
}

module.exports = bodyParser;