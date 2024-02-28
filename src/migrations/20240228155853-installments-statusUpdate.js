'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Installments', 'status', {
      type: Sequelize.ENUM('open', 'paid', 'overdue')
    });
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([queryInterface.changeColumn('Installments', 'status')])
  }
};
