const dbConfig = require('../config/db.config');
const  Sequelize  = require("sequelize");

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port
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

//Revenue associations






module.exports = db;

