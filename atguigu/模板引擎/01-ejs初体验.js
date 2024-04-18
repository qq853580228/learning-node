// ejs 用于 html 和 js 分离
const ejs = require('ejs');
const fs = require('fs');

const china = '中国';

const city = '深圳';

const str = fs.readFileSync('./atguigu/模板引擎/01html.html').toString();

// const result = ejs.render('我爱你 <%= city %>', {china, city});
const result = ejs.render(str, {china, city});

console.log(result);