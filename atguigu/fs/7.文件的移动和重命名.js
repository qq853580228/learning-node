const fs = require('fs');

// 重命名
// fs.rename('./atguigu/fs/rename.txt', './atguigu/fs/rename-1.txt', err => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log('fs.rename 成功！');
// });

// 文件移动
fs.rename('./atguigu/fs/data.txt', './atguigu/fs/files/data.txt', err => {
  if (err) {
    return console.log(err.message);
  }
  console.log('fs.rename 成功！');
});