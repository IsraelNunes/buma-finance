const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
var cors = require('cors');
var app = express();
app.use(cors());
const port = 8000;

//const router = require('./routes/index')
//routers import 
const routerService_Category = require("./router/service.category.router");
const routerProduct_Category = require('./router/product_category.router');
const routerProduct = require("./router/product.router");
const routerService = require("./router/service.router");
const routerRoles = require("./router/roles.router");
const routerEmployees = require("./router/employees.router");
const routerLegalCustomer = require('./router/legalcustomer.router');
const routerPhysicalCustomer = require('./router/physicalcustomer.router');
const routerRevenue = require('./router/revenue.router');
const routerExpanse = require('./router/expanse.router');




app.use(bodyParser.json());



app.use('/', routerProduct_Category);
app.use('/', routerService_Category);
app.use('/', routerProduct);
app.use('/', routerService);
app.use('/', routerRoles);
app.use('/', routerEmployees);
app.use('/', routerLegalCustomer);
app.use('/', routerPhysicalCustomer);
app.use('/', routerRevenue);
app.use('/', routerExpanse);
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})