const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models');
var cors = require('cors');
var app = express();
app.use(cors());
const port = 5000;
app.use(bodyParser.json);

const Revenues = db.Revenues;
const Installments = db.Installments;

function logMessage() {
    console.log('Cron job execute at:', new Date().toISOString());
}
function findID(revenues) {
    id = []
    for(index in revenues){
        id.push(revenues[index].dataValues.id)
    }
    return id;

}

async function getRevenue() {
    const revenues = await Revenues.findAll()

    console.log(findID(revenues))
    
    // for (xesquedele in revenues){
    //     console.log(revenues[xesquedele])
    // }
    return revenues;
}

getRevenue();

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})