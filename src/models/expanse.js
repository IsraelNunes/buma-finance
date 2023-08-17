const  Sequelize  = require('sequelize');
const database = require('../database');

const expanse = database.define('expanse', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    expanse_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = expanse;