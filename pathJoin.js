// 路径拼接

const fs = require('fs');
const path = require('path');

// ../会抵消前面的路径
const testStr = path.join('/a', '/b', '../', './d', 'e'); // \a\d\e
console.log(testStr);

fs.readFile(path.join(__dirname, '/files/test.txt'), 'utf-8', function(err, data) {
  if (err) {
    return console.log('test文件读取失败---', err.message);
  }
  console.log('test文件读取成功----', data);
});