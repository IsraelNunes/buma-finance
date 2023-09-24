'use strict';

const services_categories = require('../models/services_categories');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      sell_price: {
        type: Sequelize.FLOAT
      },
      code: {
        type: Sequelize.STRING
      },
      service: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Services_Categories',
          key: 'id'
        },
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
    await queryInterface.dropTable('Services');
  }
};