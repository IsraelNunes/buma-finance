const Sequelize  = require('sequelize')
const database = require('../database')

const Revenue = sequelize.define('Revenue', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,        
    }
})

module.exports = Revenue