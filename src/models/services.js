'use strict';
const {
  Model
} = require('sequelize');
const services_categories = require('./services_categories');
module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Services.init({
    name: DataTypes.STRING,
    sell_price: DataTypes.FLOAT,
    code: DataTypes.STRING,
    serviceID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Services',
  });

  return Services;
};