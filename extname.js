// path.extname 用于获取文件的扩展名

const path = require('path');

const fullPath = '/a/b/c/index.html';
const extname = path.extname(fullPath);
console.log(extname);