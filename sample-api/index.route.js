const express = require('express');

const router = express.Router();

const productRoute = require('./server/api/product/product.route')
router.use('/products', productRoute);
const userRoute = require('./server/api/user/user.route')
router.use('/users', userRoute);
module.exports = router;