// __dirname表示当前文件所处的目录

const fs = require('fs');

/* 
  出现路径拼接错误的问题，是因为使用了相对路径./或者../
  要解决这个问题 可以直接提供一个完整的文件存放路径
*/

// fs.readFile('../files/test.txt', 'utf-8', function(err, data) {
//   if (err) {
//     return console.log('test文件读取失败---', err.message);
//   }
//   console.log('test文件读取成功----', data);
// });

fs.readFile(__dirname + '/files/test.txt', 'utf-8', function(err, data) {
  if (err) {
    return console.log('test文件读取失败---', err.message);
  }
  console.log('test文件读取成功----', data);
});