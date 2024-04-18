// 如果数据对象跟数据表中的字段一一对应，则可以通过以下方式快速插入数据

// 向 users 表新增一条数据
const user = { password: '123456', username: 'super-Man' };

// 定义待执行的 SQL 语句，其中 ? 表示占位符
const sqlStr = 'INSERT INTO users SET ?';

// 使用数组的形式，依次为 ? 赋值

db.query(sqlStr, user, (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  if (result.affectedRows === 1) {
    console.log('添加成功！');
  }
});