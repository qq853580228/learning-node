const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/bilibili');

// mongoose.connection.on('open', () => {
mongoose.connection.once('open', () => {
  console.log('连接成功！');

  
  // Object  ID ：Documents 自动生成的 _id，插入数据时候会生成 _id，唯一字段
  // String： 字符串，必须是utf-8
  // Boolean：布尔值，true 或者false 
  // Integer：整数 (Int32 Int64 你们就知道有个Int就行了,一般我们用Int32)
  // Double：浮点数 (没有float类型,所有小数都是Double)
  // Arrays：数组或者列表list，多个值存储到一个键 
  // Object：这个数据类型就是字典
  // Null：空数据类型 , 一个特殊的概念,None Null
  // Timestamp：时间戳
  // Date：存储当前日期或时间unix时间格式
  // Buffer：Buffer 对象
  // Mixed 任意类型

  // 设计文档的属性和类型
  const BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    date: Date,
  });

  // 创建模型对象
  const BookModel = mongoose.model('books', BookSchema);

  // 新增
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 20.9,
    date: new Date(),
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