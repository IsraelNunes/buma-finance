require('dotenv').config()
const  Sequelize  = require("sequelize");

const username = process.env.DB_USERNAME;
const database = process.env.DB_DATABASE;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect,
    port: port
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Product_Category = require('./product_categories')(sequelize, Sequelize);
db.Service_Category = require('./services_categories')(sequelize, Sequelize);
db.Product = require('./products')(sequelize, Sequelize);
db.Service = require('./services')(sequelize, Sequelize);
db.Roles = require('./roles')(sequelize, Sequelize);
db.Employees = require('./employees')(sequelize, Sequelize);
db.LegalCustomer = require('./legalcustomers')(sequelize, Sequelize);
db.PhysicalCustomer = require('./physicalcustomer')(sequelize, Sequelize);
db.Revenues = require('./revenues')(sequelize, Sequelize);
db.Expanse = require('./expanse')(sequelize, Sequelize);
db.Installments = require('./installments')(sequelize, Sequelize);

// Associations
db.Product_Category.hasMany(db.Product, {foreignKey: "productID"});
db.Product.belongsTo(db.Product_Category, {foreignKey: "productID"});

db.Service_Category.hasMany(db.Service, {foreignKey: "serviceID"});
db.Service.belongsTo(db.Service_Category, {foreignKey: "serviceID"});

db.Roles.hasMany(db.Employees, {foreignKey: "role"});
db.Employees.belongsTo(db.Roles, {foreignKey: "role"});







module.exports = db;

