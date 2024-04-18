const fs = require('fs');

const files = fs.readdirSync('./atguigu/fs/code');

files.forEach(item => {
  const data = item.split('-');
  let [num, name] = data;
  if (num < 10) {
    num = '0' + num;
  }
  const newName = `${num}-${name}`;
  fs.renameSync(`./atguigu/fs/code/${item}`, `./atguigu/fs/code/${newName}`);
});
