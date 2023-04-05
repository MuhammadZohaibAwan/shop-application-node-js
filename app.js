const express = require('express');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// order matters 
app.use(adminRoutes);
app.use(shopRoutes);

// comment for checking updated pushing email on git account 
app.listen(3000);