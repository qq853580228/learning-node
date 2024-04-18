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

  // 更新一个
  // BookModel.updateOne({ name: '红楼梦' }, { price: 9.9 }).then(res => {
  //   console.log('updateOne', res);
  //   mongoose.disconnect();
  // }).catch(err => {
  //   console.log('err', err);
  // });

  // 批量更新
  BookModel.updateMany({ name: '红楼梦' }, { is_hot: false }).then(res => {
    console.log('updateMany', res);
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