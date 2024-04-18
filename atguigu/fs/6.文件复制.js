const fs = require('fs');

const process = require('process');

// 复制文件 方式一 readFile

// 读取文件
// const data = fs.readFileSync('./atguigu/fs/SampleVideo_720x480_30mb.mp4');

// // 写入文件
// fs.writeFileSync('./atguigu/fs/SampleVideo_720x480_30mb-2.mp4', data);
// console.log(process.memoryUsage()); // 53399552 字节

// 复制文件 方式二 流式操作。理想状态下较好

// 创建读取流对象
const rs = fs.createReadStream('./atguigu/fs/SampleVideo_720x480_30mb.mp4');

// 创建写入流对象
const ws = fs.createWriteStream('./atguigu/fs/SampleVideo_720x480_30mb-3.mp4');

// rs.on('data', chunk => {
//   ws.write(chunk);
// });

// rs.on('end', chunk => {
//   console.log('读取完成');
//   console.log(process.memoryUsage()); // 46485504 字节
// });

// pipe 管道，读取完通过管道交给写入流
rs.pipe(ws);

