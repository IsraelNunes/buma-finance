const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const port = 3000;

//const router = require('./routes/index')
//routers import 
const routerService_Category = require("./router/service.category.router");
const routerProduct_Category = require('./router/product_category.router');
const routerProduct = require("./router/product.router");
const routerService = require("./router/service.router");
const routerRoles = require("./router/roles.router");
const routerEmployees = require("./router/employees.router");




app.use(bodyParser.json());



app.use('/', routerProduct_Category);
app.use('/', routerService_Category);
app.use('/', routerProduct);
app.use('/', routerService);
app.use('/', routerRoles);
app.use('/', routerEmployees);


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})