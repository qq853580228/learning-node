module.exports = function(success, error) {
  if (typeof success !== 'function') {
    throw new Error('success is not a function');
  }
  if (typeof error !== 'function') {
    throw new Error('error is not a function');
  }
  const mongoose = require('mongoose');

  mongoose.set('strictQuery', true);

  mongoose.connect('mongodb://localhost:27017/accounts');

  // mongoose.connection.on('open', () => {
  mongoose.connection.once('open', () => {
    success();
  });

  mongoose.connection.on('error', () => {
    error();
  });

  mongoose.connection.on('close', () => {
    console.log('连接关闭！');
  });

}