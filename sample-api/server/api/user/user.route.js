const express = require('express');
const userCtrl = require('./user.controller');

const router = express.Router();

router
  .route('/')
  .get(userCtrl.list)
  .post(userCtrl.create);

module.exports = router;
