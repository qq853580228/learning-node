const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/bilibili');

// mongoose.connection.on('open', () => {
mongoose.connection.once('open', () => {
  console.log('连接成功！');

  // 设计文档的属性和类型
  const BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
  });

  // 创建模型对象
  const BookModel = mongoose.model('books', BookSchema);

  // 新增
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 20.9,
  }).then(data => {
    // 插入成功后的文档对象
    console.log('success', data);
    
    // 关闭数据库连接（项目运行过程一般不添加关闭连接操作）
    mongoose.disconnect();
  }).catch(err => {
    console.log('err', err);
  });
});

mongoose.connection.on('error', () => {
  console.log('连接失败！');
});

mongoose.connection.on('close', () => {
  console.log('连接关闭！');
});