const fs = require('fs');

const path = require('path');

const styleReg = /<style>[\s\S]*<\/style>/;
const scriptReg = /<script>[\s\S]*<\/script>/;

// 处理css样式
function styleResolve(htmlStr) {
  // 提取出页面的style内容
  const styleStr = styleReg.exec(htmlStr)[0];
  // 正则去掉style字符串的标签
  const newStyleStr = styleStr.replace(/<style>/, '').replace(/<\/style>/, '');
  // 将提取出来的css样式写入index.css
  fs.writeFile(path.join(__dirname, './files/path/index.css'), newStyleStr, err => {
    if (err) {
      return console.log('index.css写入失败：' + err.message);
    }
    console.log('index.css写入成功');
  });
}

// 处理js样式
function scriptResolve(htmlStr) {
  // 提取出页面的script内容
  const scriptStr = scriptReg.exec(htmlStr)[0];
  // 正则去掉script字符串的标签
  const newScriptStr = scriptStr.replace(/<script>/, '').replace(/<\/script>/, '');
  // 将提取出来的js写入index.js
  fs.writeFile(path.join(__dirname, './files/path/index.js'), newScriptStr, err => {
    if (err) {
      return console.log('index.js写入失败：' + err.message);
    }
    console.log('index.js写入成功');
  });
}

// 使用外链的形式加载css和js
function htmlResolve(htmlStr) {
  const newHtmlStr = htmlStr.replace(styleReg, '<link rel="stylesheet" href="./index.css">').replace(scriptReg, '<script type="text/javascript" src="./index.js"></script>')
  // 写入操作
  fs.writeFile(path.join(__dirname, './files/path/index.html'), newHtmlStr, err => {
    if (err) {
      return console.log('写入index.html文件失败：' + err.message);
    }
    console.log('index.html写入成功');
  })
}

fs.readFile(path.join(__dirname, './files/path/path.html'), 'utf-8', (err, data) => {
  if (err) {
    return console.log('读取html文件失败：' + err.message);
  }
  // console.log(data);
  styleResolve(data);
  scriptResolve(data);
  htmlResolve(data);
});