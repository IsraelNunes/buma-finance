'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Expanses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employees: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      competence: {
        type: Sequelize.DATE
      },
      gross_value: {
        type: Sequelize.FLOAT
      },
      discoiunt: {
        type: Sequelize.FLOAT
      },
      payment_type: {
        type: Sequelize.STRING
      },
      fees: {
        type: Sequelize.FLOAT
      },
      bank_account: {
        type: Sequelize.STRING
      },
      recurrent: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Expanses');
  }
};