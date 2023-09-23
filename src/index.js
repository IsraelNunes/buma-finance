const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const port = 3000;

//const router = require('./routes/index')
//Controller imports
const Product_Category = require('./controller/product_category.controller');
const Service_Category = require("./controller/service_category.controller");
const Product = require("./controller/product.controller");



//routers import 
const routerService_Category = require("./router/service.category.router");
const routerProduct_Category = require('./router/product_category.router');
const routerProduct = require("./router/product.router");




app.use(bodyParser.json());

// Product category routes

app.post('/product_category', Product_Category.createProduct_Category);
app.delete('/product_category/:id', Product_Category.deleteProduct_category);
app.put('/product_category/:id', Product_Category.updateProduct_Category);
app.get('/product_category', Product_Category.getAllProduct_Categories);
app.get('/product_category/:id', Product_Category.getProduct_CategoryByID);

//Service Category routes

app.post('service_category', Service_Category.createService_Category);

//Product routes


app.use('/', routerProduct_Category);
app.use('/', routerService_Category);
app.use('/', routerProduct);


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})