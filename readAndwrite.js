const fs = require('fs');

/* 
  将read&write.txt的内容整理到read&write-ok.txt中
*/
fs.readFile('./files/readAndwrite.txt', 'utf-8', function(err, data) {
  if (err) {
    return console.log(err.message);
  }
  const arr = data.replace(/=/g, ':').split(' ').join('\r\n');
  console.log(arr);
  fs.writeFile('./files/readAndwrite-ok.txt', arr, function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log('操作成功');
  });
});