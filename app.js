const express = require('express');
const path = require('path');
// path works fine on all operating systems. 

const app = express();

const rootDir = require('./utils/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// order matters 
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'not-found.html'));
    //here res.status or res.any method can be send but .send() should be last sent call .
})

// comment for checking updated pushing email on git account 
app.listen(3000);