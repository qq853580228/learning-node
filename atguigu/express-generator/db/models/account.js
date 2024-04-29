const mongoose = require('mongoose');

// 设计文档的属性和类型
const AccountSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  matter: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: [1, 2],
  },
  amount: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
  },
});

// 创建模型对象
const AccountModel = mongoose.model('accounts', AccountSchema);

const getAccounts = () => {
  return AccountModel.find().sort({ date: -1 });
}

const accountInsert = data => {
  return AccountModel.insertMany(data);
}

const accountDelete = id => {
  return AccountModel.deleteOne({ id });
}

module.exports = {
  getAccounts,
  accountInsert,
  accountDelete,
};