const path = require('path');

//global variable = process , mainModule property is deprecated use main instead,
module.exports = path.dirname(require.main.filename);
