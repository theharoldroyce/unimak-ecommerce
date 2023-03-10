const express = require('express');
const { upload, requireSignin, adminMiddlewre } = require('../../common-middleware');
const { createPage } = require('../../controller/admin/page');
const router = express.Router();

router.post(`/page/create`,requireSignin,adminMiddlewre,upload.fields([
    {name: 'banners'},
    {name: 'products'}
]),createPage)


module.exports = router;