const fs = require('fs');
/* 
  第一个参数：文件路径
  第二个参数：写入内容
  第三个参数为可选参数 写入文件后成功或者失败的回调
  fs.writeFile(filename, data[, options], callback)
*/
fs.writeFile('./files/testWrite.txt', 'test write', function(err) {
  if (err) {
    return console.log('testWrite文件写入失败---', err.message);
  }
  console.log('testWrite文件写入成功');
});
fs.writeFile('./file/testWrite.txt', 'test write', function(err) {
  if (err) {
    return console.log('testWrite文件写入失败---', err.message);
  }
  console.log('testWrite文件写入成功');
});