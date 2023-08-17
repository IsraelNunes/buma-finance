'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BankAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BankAccount.init({
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    accountName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    CPF: DataTypes.STRING,
    ownerName: DataTypes.STRING,
    openDate: DataTypes.DATE,
    agency: DataTypes.STRING,
    agencyDigit: DataTypes.STRING,
    accountNumber: DataTypes.STRING,
    accountDigit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BankAccount',
  });
  return BankAccount;
};