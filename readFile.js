const fs = require('fs');
/* 
  fs.readFile(path[, options], callback)
  第一个参数：文件路径
  第二个参数为可选参数：编码格式 默认是Buffer
  第三个参数为读取文件后成功或者失败的回调
  err：错误信息，如果没有错误，err的值为null
  data：成功信息，如果读取失败，data为undefined
*/
fs.readFile('./files/test.txt', 'utf-8', function(err, data) {
  if (err) {
    return console.log('test文件读取失败---', err.message);
  }
  console.log('test文件读取成功----', data);
});
fs.readFile('./test1.txt', 'utf-8', function(err, data) {
  if (err) {
    return console.log('test1文件读取失败---', err.message);
  }
  console.log('test1文件读取成功----', data);
});