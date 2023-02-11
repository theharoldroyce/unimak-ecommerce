const Product = require('../models/product');
const multer = require('multer');
const shortid = require('shortid');
const slugify = require('slugify');
const Category = require('../models/category');



exports.createProducts = (req, res) => {

    // res.status(200).json({ file: req.files, body: req.body});

    const {
        name, brand, price, description, quantity, status, category, createdBy
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
        brand,
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


exports.getProductBySlug = (req, res) => {
    const { slug } = req.params;
    Category.findOne({ slug: slug })
        .select('_id')
        .exec((error, category) => {
            if (error) {
                return res.status(400).json({ error });
            }

            if (category) {
                Product.find({ category: category._id })
                    .exec((error, products) => {

                        if (error) {
                            return res.status(400).json({ error });
                        }

                        if (products.length > 0) {
                            res.status(200).json({
                                products,
                                productByPrice: {
                                    under1h: products.filter(product => product.price <= 50),
                                    under5h: products.filter(product => product.price > 50 && product.price <= 100),
                                    under100h: products.filter(product => product.price > 100 && product.price <= 150),
                                    under100h: products.filter(product => product.price > 150 && product.price <= 200),
                                    under100h: products.filter(product => product.price > 200 && product.price <= 300),
                                }
                            });
                        }
                    })
            }
        })

}