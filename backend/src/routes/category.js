const express = require('express');
const { requireSignin, adminMiddlewre } = require('../common-middleware');
const { addCategory, getCategories, updateCategories, deleteCategories } = require('../controller/category');
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

router.post('/category/create', requireSignin, adminMiddlewre, upload.single('categoryImage'), addCategory);
router.get('/category/getcategory', getCategories);
router.post('/category/update', upload.array('categoryImage'), updateCategories)
router.post('/category/delete', deleteCategories)


module.exports = router;