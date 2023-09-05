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
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Services',
  });
  Services.associate = function(models) {
    Services.belongsTo(Services_Categories, {foreignKey: 'categoryID', as: 'Service_Categories'});
  }
  return Services;
};