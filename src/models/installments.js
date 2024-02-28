'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Installments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Installments.init({
    expanse: DataTypes.INTEGER,
    revenue: DataTypes.INTEGER,
    installment: DataTypes.INTEGER,
    date: DataTypes.ENUM('open', 'paid', 'overdue'),
    status: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Installments',
  });
  return Installments;
};