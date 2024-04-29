var express = require('express');
const { formidable } = require('formidable');
var router = express.Router();
const { insert, query, remove } = require('../data/index');
const { getAccounts, accountDelete, accountInsert } = require('../db/models/account');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 记账本的列表
router.get('/account', function(req, res) {
  getAccounts().then(data => {
    console.log('getAccounts success', data);
    res.render('accountList', { accountList: data });
  })
  .catch(err => {
    console.log('getAccounts err', err);
  });

  // res.render('accountList', { accountList: query('accounts') });
});

// 添加记账本页面
router.get('/account/create', function(req, res) {
  res.render('accountCreate');
});

// 添加记账本
router.post('/account', function(req, res) {
  accountInsert({ id: Date.now().toString(), ...req.body }).then(data => {
    console.log('accountInsert success', data);
    res.render('success', { msg: '添加成功！', url: '/account' });
  })
  .catch(err => {
    console.log('accountInsert err', err);
  });
  // insert('accounts', { id: Date.now().toString(), ...req.body });
  // res.render('success', { msg: '添加成功！', url: '/account' });
  // res.send('添加成功');
});

// 删除记账本
router.get('/account/:id', function(req, res) {
  accountDelete(req.params.id).then(data => {
    console.log('accountDelete success', data);
    res.render('success', { msg: '删除成功！', url: '/account' });
  })
  .catch(err => {
    console.log('accountDelete err', err);
  });
  // remove('accounts', req.params.id);
  // res.render('success', { msg: '删除成功！', url: '/account' });
});

router.get('/portrait', (req, res) => {
  res.render('portrait');
});

router.post('/portrait', (req, res, next) => {
  const form = formidable({ 
    multiples: true,
    // 设置上传文件的保存目录
    uploadDir: __dirname + '/../public/images',
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // res.json({ fields, files });
    const url = '/images' + files?.portrait[0].newFilename;
    res.send({ url });
  });
});

module.exports = router;
