'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Revenues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      product: {
        type: Sequelize.INTEGER,
        allowNull: true, 
        references: {
          model: {
            tableName: "Products",
            key: "id"
          },
        },
      },
      service: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Services",
            key: "id"
          },
        },
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.FLOAT
      },
      payment_status: {
        type: Sequelize.BOOLEAN
      },
      legalcustomer: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "LegalCustomers",
            key: "id"
          },
        },
      },
      physicalcustomer: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "PhysicalCustomers",
            key: "id"
          },
        },
      },
      installments:{
        type: Sequelize.INTEGER
      },
      due_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Revenues');
  }
};