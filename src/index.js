const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const port = 3000;

//const router = require('./routes/index')
//Controller imports
const Product_Category = require('./controller/product_category.controller');
const routeProduct_Category = require('./router/product_category.router');


app.use(bodyParser.json());

app.post('/product_category', Product_Category.createProduct_Category);
app.delete('/product_category/:id', Product_Category.deleteProduct_category);
app.put('/product_category/:id', Product_Category.updateProduct_category);
app.get('/product_category', Product_Category.getAllProduct_Categories);
app.get('/product_category/:id', Product_Category.getProduct_CategoryByID);

app.use('/', routeProduct_Category);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})