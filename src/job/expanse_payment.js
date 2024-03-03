const express = require('express')
const app = express()
const db = require('../models');
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})