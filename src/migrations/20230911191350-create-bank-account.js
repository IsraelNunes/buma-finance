'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bank_Accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Account_Name: {
        type: Sequelize.STRING
      },
      Birthdate: {
        type: Sequelize.DATE
      },
      CPF: {
        type: Sequelize.STRING
      },
      Owner_Name: {
        type: Sequelize.STRING
      },
      Open_Date: {
        type: Sequelize.DATE
      },
      Agency: {
        type: Sequelize.STRING
      },
      Agency_Digit: {
        type: Sequelize.STRING
      },
      Account: {
        type: Sequelize.STRING
      },
      Account_Digit: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bank_Accounts');
  }
};