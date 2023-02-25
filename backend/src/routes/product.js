const express = require('express');
const { requireSignin, adminMiddlewre } = require('../common-middleware');
const { createProducts, getProductBySlug } = require('../controller/product');
// const { addCategory, getCategories } = require('../controller/category');
const multer = require('multer');
const router = express.Router();
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

// const upload = multer({ storage: storage })
const upload = multer({ storage });

router.post('/product/create', requireSignin, adminMiddlewre, upload.array('productImage'), createProducts);
router.get('/products/:slug', getProductBySlug)
// router.get('/category/getcategory', getCategories );



module.exports = router;