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

  // 小于
  // BookModel.find({ price: {$lt: 20} }).then(res => {
  //   console.log('find price < 20', res);
  //   mongoose.disconnect();
  // }).catch(err => {
  //   console.log('err', err);
  // });

  // 逻辑或
  // BookModel.find({ $or: [{author: '尾鱼'},{author: '曹雪芹'}] }).then(res => {
  //   console.log('find author is 尾鱼 or 曹雪芹', res);
  //   mongoose.disconnect();
  // }).catch(err => {
  //   console.log('err', err);
  // });

  // 逻辑与 价格大于5且小于20
  // BookModel.find({ $and: [{price: { $lt: 20 }},{price: { $gt: 5 }}] }).then(res => {
  //   console.log('find price lt 20 and gt 5', res);
  //   mongoose.disconnect();
  // }).catch(err => {
  //   console.log('err', err);
  // });

  // 正则
  // BookModel.find({ name: /水/ }).then(res => {
  //   console.log('find name', res);
  //   mongoose.disconnect();
  // }).catch(err => {
  //   console.log('err', err);
  // });

  // 正则
  BookModel.find({ name: new RegExp('水') }).then(res => {
    console.log('find name', res);
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