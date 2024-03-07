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



async function findID(revenues) {
    id = []
    let count = 0
     for await (index of revenues){
        id.push(revenues[count].dataValues.id)
        count++
    }
    return id;

}

function paidVerification(payment_value){
    if (payment_value === 'true'){
        console.log("All payments are done")
    }

}

async function inspectRevenue(ids){
        // for await (id of ids) {
            const revenue = await Revenues.findByPk(1);
            const payment_status = await revenue.dataValues.payment_status;
            const installment = await Installments.findAll({where: {revenue: 1}})
            for (index of installment){
                if (index.dataValues.status !== payment_status) {
                    console.log("open mama")
                }
            }
        //     console.log(revenue.dataValues)
        // }

        // for(id in ids) {
        
        

                         
        //    const revenue = Revenues.findByPk(ids[0])
        //         .then((revenue) => {
        //             const payment_value = revenue.dataValues.payment_status;
        //             const installment = Installments.findAll({where: {revenue: ids[0]}})
        //             let status =  {payment_value, installment}
        //             return Installments.findAll({where: {revenue: ids[0]}})
                    
        //         })
        //         .then((status) => {
        //             console.log(status)
                    // for (index in installments){
                    //     console.log(installments[index].dataValues.status)
                    //     console.log(installments[index].dataValues.date)
                    // }

                    
                    // const dataValues = installments.map(installments => installments.dataValues.status)
                }

        // }



async function getRevenue() {
    const revenues = await Revenues.findAll();
    // const print = await printar(revenues);    
    const ids = await findID(revenues);
    const update = await inspectRevenue(ids);

        // .then((revenues) =>{
        //     return findID(revenues)
        // })
        // .then((ids) => {
        //     inspectRevenue(ids)
        // })
   
}

getRevenue();

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})