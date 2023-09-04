const {Sequelize, DataTypes} = require('sequelize');
const database = require('../database');

const Product_Category = database.define('Product_Category', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Product_Category;