const express = require('express');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// order matters 
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
    //here res.status or res.any method can be send but .send() should be last sent call .
})

// comment for checking updated pushing email on git account 
app.listen(3000);