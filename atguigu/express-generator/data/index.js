const Lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./data/db.json');

// 获取 db 对象
const db = Lowdb(adapter);

// 初始化数据
// db.defaults({ posts: [] }).write();

// 写入数据
// db.get('posts').push({ id: 1, title: '今天天气很不错' }).write();
// db.get('posts').push({ id: 2, title: '今天天气很不错' }).write();
// db.get('posts').push({ id: 3, title: '今天天气很不错' }).write();

// 获取数据
// console.log(db.get('posts').value());

// 删除数据
// db.get('posts').remove({ id: 2 }).write();

// 更新数据
// db.get('posts').find({ id: 1 }).assign({ name: 'bls' }).write();

// 新增数据
const insert = (key, data) => {
  if (!key || !data) {
    return;
  }
  db.get(key).unshift(data).write();
}

// 查询数据
const query = (key) => {
  if (!key) {
    return [];
  }
  return db.get(key).value();
}

// 更新数据
const update = (key, data) => {
  if (!key || !data) {
    return;
  }
  db.get(key).find({ id: data.id }).assign(data).write();
}

// 删除数据
const remove = (key, id) => {
  if (!key || !id) {
    return;
  }
  db.get(key).remove({ id }).write();
}

module.exports = {
  insert,
  remove,
  update,
  query,
}