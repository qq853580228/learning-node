// buffer 转字符串
// let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);

// console.log(buf_4.toString()); // utf-8

// let buf_5 = Buffer.from('hello');
// console.log(buf_5[0].toString(2)); // 1101000
// buf_5[0] = 95;
// console.log(buf_5.toString()); // _ello

// 溢出
// let buf_6 = Buffer.from('hello');
// buf_6[0] = 361; // 舍弃高位的数字 0001 0110 1001 => 0110 1001
// console.log(buf_6);

// 中文
let buf_7 = Buffer.from('你好');

console.log(buf_7); // <Buffer e4 bd a0 e5 a5 bd>



