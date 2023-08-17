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
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    installmentsNumber: DataTypes.INTEGER,
    paymentStatus:{ 
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Installments',
  });
  return Installments;
};