const fs = require('fs');

// 方式一

// fs.unlink('./atguigu/fs/files/data.txt', err => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log('fs.unlink 成功！');
// });

fs.rm('./atguigu/fs/data.txt', err => {
  if (err) {
    return console.log(err.message);
  }
  console.log('fs.rm 成功！');
});