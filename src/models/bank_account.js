'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bank_Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bank_Account.init({
    Account_Name: DataTypes.STRING,
    Birthdate: DataTypes.DATE,
    CPF: DataTypes.STRING,
    Owner_Name: DataTypes.STRING,
    Open_Date: DataTypes.DATE,
    Agency: DataTypes.STRING,
    Agency_Digit: DataTypes.STRING,
    Account: DataTypes.STRING,
    Account_Digit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bank_Account',
  });
  return Bank_Account;
};