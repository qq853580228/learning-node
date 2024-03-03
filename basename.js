// path.basename 获取路径中的文件名，第一个参数为文件的路径 第二个参数为文件的扩展名

const path = require('path');

const fullPath = path.join(__dirname, './files/test.txt');
const basename = path.basename(fullPath);
console.log(basename); // test.txt
const nameWithoutExt = path.basename(fullPath, '.txt'); // 移除文件扩展名
console.log(nameWithoutExt); // test
