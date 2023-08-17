'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CashFlow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CashFlow.init({
    cashFlowValue: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'CashFlow',
  });
  return CashFlow;
};