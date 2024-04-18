// 导入 mysql 
const mysql = require('mysql');

// 建立与 MySQL 数据库的连接
const db = mysql.createConnection({
  host: '127.0.0.1', // 数据库的 IP 地址
  port: '3306', // 数据库的端口号
  user: 'root', // 登录数据库的用户名
  password: 'root', // 登录数据库的密码
  database: 'my_db', // 指定要操作哪个数据库
});

// 检测 mysql 能否正常工作
// db.query('select * from users', (err, result) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log(result);
// });

// users
const user = { id: 6, status: 1 };
// 定义待执行的 SQL 语句，其中 ? 表示占位符
const sqlStr = 'UPDATE users SET status=? WHERE id=?';

// 使用数组的形式，依次为 ? 赋值

db.query(sqlStr, [user.status, user.id], (err, result) => {
  if (err) {
    return console.log(err);
  }
  if (result.affectedRows === 1) {
    console.log('删除成功！');
  }
});