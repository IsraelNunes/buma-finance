const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const db = require('./db')
const port = 3000

const app=express();

db.query("SELECT 1")
.then(() => {
  console.log('Db connection success');
  app.listen(port, 
    ()=> console.log(`Server is running on ${port}`))  
})
.catch(err => console.log('Db connection fail'))


