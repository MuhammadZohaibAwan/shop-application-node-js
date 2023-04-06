const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const path = require('path');
const rootDir = require('../utils/path');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

router.get('/add-product', (req, res, next) => {
    res.sendFile(
        path.join(rootDir, 'views', 'add-product.html')
        // '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    );
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
})

module.exports = router;