const fs = require('fs');

// stat status 缩写
fs.stat('./atguigu/fs/观书有感.txt', (err, data) => {
  if (err) {
    return console.log(err.message);
  }
  console.log('fs.stat 成功！', data);
});