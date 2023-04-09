const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log('shop js', adminData.products);
    //__dirname = global variable provided by node 
    // __dirname provides the path in which we are using our file 
    //we can't uses / 
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

module.exports = router;