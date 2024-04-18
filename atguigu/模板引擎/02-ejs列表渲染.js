// ejs 用于 html 和 js 分离
const ejs = require('ejs');
const fs = require('fs');

const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙和尚'];

const str = fs.readFileSync('./atguigu/模板引擎/02html.html').toString();

const result = ejs.render(str, {xiyou});

console.log(result);