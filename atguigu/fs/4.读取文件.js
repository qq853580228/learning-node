const fs = require('fs');

// 异步读取
fs.readFile('./atguigu/fs/观书有感.txt', 'utf-8', (err, data) => {
  if (err) {
    return console.log(err.message);
  }
  console.log('读取成功', data);
});

// 同步读取
// try {
//   const data = fs.readFileSync('./atguigu/fs/观书有感1.txt', 'utf-8');
//   console.log(data);
// } catch (error) {
//   console.log(error.message); // no such file or directory, open './atguigu/fs/观书有感1.txt'
// }