/* 
  Buffer 缓冲区
  buffer 是类似一个数组,用于表示固定长度的字节序列

  buffer 本质是一段内存空间，专门用来处理二进制数据
*/

// let buf = Buffer.alloc(10);

// console.log(buf);

// let buf_2 = Buffer.allocUnsafe(10000);

// console.log(buf_2);

let buf_3 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);

console.log(buf_3);
