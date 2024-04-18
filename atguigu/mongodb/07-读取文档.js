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
    is_hot: Boolean,
  });

  // 创建模型对象
  const BookModel = mongoose.model('novel', BookSchema);

  // 读取一个
  // BookModel.findById('66211f3ee82616e08b95ad79').then(res => {
  //   console.log('findById', res);
  //   mongoose.disconnect();
  // }).catch(err => {
  //   console.log('err', err);
  // });

  // BookModel.findOne({ name: '红楼梦' }).then(res => {
  //   console.log('findOne', res);
  //   mongoose.disconnect();
  // }).catch(err => {
  //   console.log('err', err);
  // });

  // 批量读取
  BookModel.find({ is_hot: true}).then(res => {
    console.log('find', res);
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