'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product_Categories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product_Categories',
  });
  Product_Categories.associate = function(models) {
    Product_Categories.hasMany(Products);
  }
  return Product_Categories;
};
