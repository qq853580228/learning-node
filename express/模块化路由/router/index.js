// 这是路由模块

// 导入express
const express = require('express');

// 创建路由对象
const router = express.Router();

// 挂载具体路由
router.get('/user', (req, res) => {
  res.send('get a user');
});

router.post('/user/add', (req, res) => {
  res.send('add a user');
});

// 导出具体路由
module.exports = router;