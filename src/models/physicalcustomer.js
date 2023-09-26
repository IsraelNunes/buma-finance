'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhysicalCustomer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PhysicalCustomer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    CPF: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PhysicalCustomer',
  });
  return PhysicalCustomer;
};