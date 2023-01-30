const express = require('express');
const { addItemToCart } = require('../controller/cart')
const { requireSignin, userMiddlewre,  } = require('../common-middleware');
const router = express.Router();

router.post('/user/cart/addtocart', requireSignin, userMiddlewre, addItemToCart );

module.exports = router;