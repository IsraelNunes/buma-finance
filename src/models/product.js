const {Sequelize, DataTypes} = require('sequelize');
const database = require('../database');
const Product_Category = require('./product_category');
const Product = database.define('Product', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sell_price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

module.exports = Product;