'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Services_Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Services_Categories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Services_Categories',
  });
  return Services_Categories;
};