const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('railway', 'root', 'u7v1p9iB5oGEHSYtG9Pr',{
    host:'containers-us-west-115.railway.app',
    dialect: 'mysql',
    port: '7715'
})

async function test_connection() {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}
}

test_connection();

module.exports = sequelize;