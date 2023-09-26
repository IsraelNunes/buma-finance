'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LegalCustomers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LegalCustomers.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    CNPJ: DataTypes.STRING,
    company_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LegalCustomers',
  });
  return LegalCustomers;
};