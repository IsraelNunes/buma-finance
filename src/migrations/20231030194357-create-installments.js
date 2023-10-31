'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Installments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      expanse: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Expanses",
            key: "id"
          },
        },
      },
      revenue: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Revenues",
            key: "id"
          },
        },
      },
      installment: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      status: {
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
    await queryInterface.dropTable('Installments');
  }
};