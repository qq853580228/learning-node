const path = require('path');

// console.log(__dirname + './index.html');

/* 
  resolve 第一个参数为绝对路径 后面为相对路径
*/
//D:\zjy\files\code\personal\learning-node\atguigu\path\index.html
// console.log(path.resolve(__dirname, './index.html'));

// D:\index.html
// console.log(path.resolve(__dirname, '/index.html'));

//D:\zjy\files\code\personal\learning-node\atguigu\path\index.html
// console.log(path.resolve(__dirname, 'index.html'));

// sep 分隔符 window -> \， linux  -> /
// console.log(path.sep);

let str = 'D:\\zjy\\files\\code\\personal\\learning-node\\atguigu\\path\\index.html';

// console.log(path.parse(str));

/* 
  路径对象
  {
    root: 'D:\\',
    dir: 'D:\\zjy\\files\\code\\personal\\learning-node\\atguigu\\path',
    base: 'index.html',
    ext: '.html',
    name: 'index'
  }
*/

// index.html 文件名
// console.log(path.basename(str));

// 所在目录：D:\zjy\files\code\personal\learning-node\atguigu\path
// console.log(path.dirname(str));

// 扩展名；.html
// console.log(path.extname(str));

/* 
  path.join 和 path.resolve 区别
  path.join 函数用于将各个路径片段拼接成一个完整的路径。
  path.resolve 函数用于解析路径，生成绝对路径。

  一、相同点
  1、路径拼接： 无论是 path.join 还是 path.resolve ，它们都用于处理路径。它们的主要目标是将路径片段组合在一起，形成一个有效的路径。
  2、可跨平台： 两个函数都会根据操作系统的规则自动处理路径分隔符，因此在不同操作系统上都能正常工作。

  二、不同点
  1、路径生成： 最明显的区别是路径生成的方式。path.join生成一个相对路径，而path.resolve生成一个绝对路径。
  2、参数处理： path.join接受多个参数，将它们按顺序拼接起来形成路径，而path.resolve也接受多个参数，但是会从右到左处理，直到生成绝对路径。
  3、基准路径： path.resolve函数的第一个参数被视为基准路径，其余参数将根据该基准路径解析。而path.join没有基准路径的概念，只是简单地将所有参数拼接在一起。
  4、用途： path.join通常用于构建相对路径，而path.resolve用于确定文件的确切位置，通常用于生成绝对路径。
*/

// const result = path.join('user', 'documents', 'file.txt');
// console.log(result); // 输出: user/documents/file.txt

// const result2 = path.join('/user', 'documents', 'file.txt');
// console.log(result2); // 输出: /user/documents/file.txt


const result = path.resolve('user', 'documents', '../files', 'file.txt');
console.log(result); // 输出: D:\zjy\files\code\personal\learning-node\user\files\file.txt

const result2 = path.resolve('/user', 'documents', '../files', 'file.txt');
console.log(result2); // 输出: D:\user\files\file.txt