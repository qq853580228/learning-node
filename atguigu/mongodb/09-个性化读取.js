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

  // 属性值为1 - 展示
  // BookModel.find().select({ name: 1, id: 1 }).then(res => {
  //   console.log('find select', res);
  //   mongoose.disconnect();
  // }).catch(err => {
  //   console.log('err', err);
  // });

  // 属性值：1 - 升序，-1：降序
  // BookModel.find().select({ name: 1, id: 1 }).sort({ price: -1 }).then(res => {
  //   console.log('find sort', res);
  //   mongoose.disconnect();
  // }).catch(err => {
  //   console.log('err', err);
  // });

  // 数据的截取
  BookModel.find().select({ name: 1, id: 1 }).skip(2).limit(2).sort({ price: -1 }).then(res => {
    console.log('find skip limit sort', res);
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