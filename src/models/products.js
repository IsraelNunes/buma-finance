'use strict';
const {
  Model
} = require('sequelize');
const Product_categories = require('./product_categories');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    name: DataTypes.STRING,
    sell_price: DataTypes.FLOAT,
    code: DataTypes.STRING,
    productID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Products',
  });

  return Products;
};