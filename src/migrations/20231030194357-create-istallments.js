'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Istallments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Expanse: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Expanses",
            key: "id"
          },
        },
      },
      Revenue: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Revenues",
            key: "id"
          },
        },
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
    await queryInterface.dropTable('Istallments');
  }
};