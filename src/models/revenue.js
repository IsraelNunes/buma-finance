'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Revenue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Revenue.init({
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    discount: DataTypes.FLOAT,
    paymentStatus: DataTypes.BOOLEAN,
    paymentType: DataTypes.STRING,
    firstPay: DataTypes.DATE,
    recurrent: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Revenue',
  });
  return Revenue;
};