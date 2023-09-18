'use strict';
const {
  Model
} = require('sequelize');
const products = require('./products');
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Income.init({
    product: DataTypes.INTEGER,
    description: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    discount: DataTypes.FLOAT,
    payment_status: DataTypes.BOOLEAN,
    payment_type: DataTypes.STRING,
    due_date: DataTypes.DATE,
    bank_account: DataTypes.INTEGER,
    recurrent: DataTypes.BOOLEAN,
    customer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Income',
  });
  Income.associate = function(models){
    Income.hasMany(Products);
    Income.hasMany(Services);
    Income.hasOne(Bank_Account);
  }
  return Income;
};