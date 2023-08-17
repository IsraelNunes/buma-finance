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
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    duaDate: DataTypes.DATE,
    grossValue: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    paymentStatus: DataTypes.BOOLEAN,
    fees: DataTypes.FLOAT,
    recurrent: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Expanse',
  });
  return Expanse;
};