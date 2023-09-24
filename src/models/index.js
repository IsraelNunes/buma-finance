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

db.Product_Category.hasMany(db.Product);
db.Product.belongsTo(db.Product_Category, {foreignKey: "productID"});

db.Service_Category.hasMany(db.Service);
db.Service.belongsTo(db.Service_Category, {foreignKey: "serviceID"});

module.exports = db;

