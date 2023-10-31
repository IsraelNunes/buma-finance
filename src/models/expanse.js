'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expanse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Expanse.init({
    employees: DataTypes.INTEGER,
    name: DataTypes.STRING,
    competence: DataTypes.DATE,
    gross_value: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    installments: DataTypes.INTEGER,
    payment_type: DataTypes.STRING,
    fees: DataTypes.FLOAT,
    bank_account: DataTypes.STRING,
    recurrent: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Expanse',
  });
  return Expanse;
};