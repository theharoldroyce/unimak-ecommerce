const Product = require('../models/product');
const multer = require('multer');
const shortid = require('shortid');
const slugify = require('slugify');



exports.createProducts = (req, res) => {

    // res.status(200).json({ file: req.files, body: req.body});

    const {
        name, price, description, quantity, status, category, createdBy
    } = req.body;

    let productImage = [];

    if (req.files.length > 0) {
        productImage = req.files.map(file => {
            return { img: file.filename }
        })
    }

    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        description,
        quantity,
        status,
        category,
        productImage,
        createdBy: req.user._id

    });

    product.save(((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {
            res.status(200).json({ product });
        }
    }))


};