const express = require('express');
const path = require('path');
// path works fine on all operating systems. 
const bodyParser = require('body-parser');
const rootDir = require('./utils/path');
const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//body-parser should append to main gateway file where routes are being handled 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//static file serving 

// order matters 
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    //here res.status or res.any method can be send but .send() should be last sent call .
})

// comment for checking updated pushing email on git account 
app.listen(3000);