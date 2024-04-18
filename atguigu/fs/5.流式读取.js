const fs = require('fs');

// 创建读取流对象
const rs = fs.createReadStream('./atguigu/fs/SampleVideo_720x480_30mb.mp4');

// 绑定 data 事件，chunk 块
rs.on('data', chunk => {
  console.log(chunk.length); // chunk.length --- 65486 => 64kb
});

rs.on('end', () => {
  console.log('读取完成');
});

rs.on('error', err => {
  console.log(err.message);
});