const fs = require('fs');

// 创建一个文件夹
// fs.mkdir('./atguigu/fs/file', err => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log('fs.mkdir 成功！');
// });

// 递归创建文件夹 recursive - 递归
// fs.mkdir('./atguigu/fs/file/vue', { recursive: true }, err => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log('fs.mkdir 成功！');
// });

// 读取文件夹
// fs.readdir('./atguigu/fs/file/vue', (err, data) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log('fs.mkdir 成功！', data); // [ 'index.vue' ]
// });

// 删除一个文件夹
// fs.rmdir('./atguigu/fs/file', err => {
//   if (err) {
//     return console.log(err.message); // directory not empty
//   }
//   console.log('fs.rmdir 成功！');
// });

// 不推荐使用 递归删除文件夹
// fs.rmdir('./atguigu/fs/file', { recursive: true }, err => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log('fs.rmdir 成功！');
// });

// 推荐使用

fs.rm('./atguigu/fs/file', { recursive: true }, err => {
  if (err) {
    return console.log(err.message);
  }
  console.log('fs.rm 成功！');
});