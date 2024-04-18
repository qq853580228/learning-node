const fs = require('fs');

// fs.writeFile('./atguigu/fs/寻找bls.txt', '你好', err => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log('写入成功');
// });

fs.writeFile(__dirname + '/寻找bls.txt', '你好', err => {
  if (err) {
    return console.log(err.message);
  }
  console.log('写入成功');
});