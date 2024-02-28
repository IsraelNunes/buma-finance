'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Revenues', 'payment_status', {
      type: Sequelize.ENUM('open', 'paid', 'overdue'),
      defaultValue: "open"
    });
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn('Revenues', 'payment_status')])
  }
};
