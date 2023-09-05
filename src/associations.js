const Sequelize = require('sequelize');
const models = require('./models');

const Product = models.Product;
const Product_Category = models.Product_Category

Product_Category.hasMany(Product)