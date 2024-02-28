'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Revenues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Revenues.init({
    description: DataTypes.STRING,
    product: DataTypes.INTEGER,
    service: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    discount: DataTypes.FLOAT,
    payment_status: DataTypes.ENUM('open', 'paid', 'overdue'),
    legalcustomer: DataTypes.INTEGER,
    physicalcustomer: DataTypes.INTEGER,
    installments: DataTypes.INTEGER,
    due_date: DataTypes.DATE,
    recurrent: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Revenues',
  });
  return Revenues;
};