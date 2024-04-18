const Lowdb = require('lowdb');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');

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
db.get('posts').find({ id: 1 }).assign({ name: 'bls' }).write();

