// 日志

const fs = require('fs');

// fs.appendFile('./atguigu/fs/寻找bls.txt', '\n暴力生', err => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log('写入成功');
// });

// writeFile 实现追加文件内容
fs.appendFile('./atguigu/fs/寻找bls.txt', '\n暴力生', { flag: 'a' }, err => {
  if (err) {
    return console.log(err.message);
  }
  console.log('写入成功');
});