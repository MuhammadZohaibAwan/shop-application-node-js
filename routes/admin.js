const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    // res.sendFile(
    //     path.join(rootDir, 'views', 'add-product.html')
    //     // '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    // );
    res.render('add-product', { pageTitle: 'Add Product' });
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
})

exports.routes = router;
exports.products = products;

// module.exports = router;