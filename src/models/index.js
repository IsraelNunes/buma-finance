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
db.Service_Category = require('./product_categories')(sequelize, Sequelize);
db.Product = require('./products')(sequelize, Sequelize);

db.Product.associate({
    Product_Category: db.Product_Category
})

module.exports = db;

