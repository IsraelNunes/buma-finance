'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class physicalCustomer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  physicalCustomer.init({
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    CPF: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'physicalCustomer',
  });
  return physicalCustomer;
};