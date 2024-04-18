// 向 users 表新增一条数据
const user = { username: 'superMan', password: '123456' };

// 定义待执行的 SQL 语句，其中 VALUES (?, ?) 的 ? 表示占位符
const sqlStr = 'INSERT INTO users (username, password) VALUES (?, ?)';

// 使用数组的形式，依次为 ? 赋值

db.query(sqlStr, [user.username, user.password], (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  if (result.affectedRows === 1) {
    console.log('添加成功！');
  }
});