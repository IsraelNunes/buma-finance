const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'containers-us-west-115.railway.app',
  user: 'root',
  password: 'u7v1p9iB5oGEHSYtG9Pr',
  database: 'railway',
  port: '7715'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()