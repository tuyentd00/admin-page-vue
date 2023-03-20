const express = require('express');
const productCtl = require('./product.controller');

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  .get(productCtl.list)
  .post(productCtl.create);

module.exports = router;
