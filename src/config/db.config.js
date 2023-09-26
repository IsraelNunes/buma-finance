require('dotenv').config()

const userdb = process.env.USER_DB;
const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.PORT;


module.exports = {
    username: userdb,
    password: password,
    database: database,
    host: host,
    dialect: "mysql",
    port: port
  }

  console.log(userdb)