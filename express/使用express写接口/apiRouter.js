const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
  res.send({
    status: 200,
    msg: 'ok',
    data: req.query,
  });
});

router.post('/login', (req, res) => {
  res.send({
    status: 200,
    msg: 'ok',
    data: req.body,
  });
});

router.delete('/delete/:id', (req, res) => {
  res.send({
    status: 200,
    msg: 'ok',
    data: req.params,
  });
});

module.exports = router;