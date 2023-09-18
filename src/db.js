const mysql = require('mysql2/promise');


const mysqlPool = mysql.createPool ({
        host: 'containers-us-west-115.railway.app',
        user: 'root',
        password: 'u7v1p9iB5oGEHSYtG9Pr',
        database: 'railway',
        port: '7715',
        connectTimeout: 6000

})


module.exports = mysqlPool;