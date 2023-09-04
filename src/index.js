(async () => {

    const database = require('./database');
    const Product = require('./models/product');
    const Product_Category = require('./models/product_category');
    await database.sync();

})();