const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models');
var cors = require('cors');
const revenues = require('../models/revenues');
const { where } = require('sequelize');
var app = express();
app.use(cors());
const port = 5000;
app.use(bodyParser.json);

const Revenues = db.Revenues;
const Installments = db.Installments;

function findID(revenues) {
    id = []
    for(index in revenues){
          id.push(revenues[index].dataValues.id)
    }
    return id;

}

function paidVerification(payment_value){

}

function inspectRevenue(ids){
        

        // for(id in ids) {
            
           const revenue = Revenues.findByPk(ids[0])
                .then((revenue) => {
                    console.log(revenue.dataValues)
                    const payment_value = revenue.dataValues.payment_status;
                    const installment = Installments.findAll({where: {revenue: ids[0]}})
                    console.log(installment)
                })

        // }
}



function getRevenue() {
    const result = Revenues.findAll()
        .then((revenues) =>{
            return findID(revenues)
        })
        .then((ids) => {
            inspectRevenue(ids)
        })
   
}

getRevenue();

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})