const user = { id: 12 };
// 定义待执行的 SQL 语句，其中 ? 表示占位符
const sqlStr = 'DELETE FROM users WHERE id=?';

// 使用数组的形式，依次为 ? 赋值

db.query(sqlStr, [user.id], (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  if (result.affectedRows === 1) {
    console.log('删除成功！');
  }
});