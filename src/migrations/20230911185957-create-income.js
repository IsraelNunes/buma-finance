'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Incomes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id"
        },
      },
      service: {
        type: Sequelize.INTEGER,
        references: {
          model: "Services",
          key: "id"
        },
      },
      description: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.FLOAT
      },
      payment_status: {
        type: Sequelize.BOOLEAN
      },
      payment_type: {
        type: Sequelize.STRING
      },
      due_date: {
        type: Sequelize.DATE
      },
      bank_account: {
        type: Sequelize.INTEGER,
        references: {
          model: "Bank_Accounts",
          key: "id"
        },
      },
      recurrent: {
        type: Sequelize.BOOLEAN
      },
      customer: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Incomes');
  }
};