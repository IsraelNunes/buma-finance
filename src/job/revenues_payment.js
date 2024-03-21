const express = require('express');
const bodyParser = require('body-parser');
const db = require('../models');
var cors = require('cors');
const revenues = require('../models/revenues');
const { where } = require('sequelize');
const { range } = require('express/lib/request');
var app = express();
app.use(cors());
const port = 5000;
app.use(bodyParser.json);

const Revenues = db.Revenues;
const Installments = db.Installments;

let currentDate = new Date().toJSON().slice(0, 10);
currentDate = new Date(currentDate);


async function findID(revenues) {
    id = []
    let count = 0
     for await (index of revenues){
        id.push(revenues[count].dataValues.id)
        count++
    }
    return id;

}


async function inspectRevenue(ids){
        // for await (id of ids) {
            const revenue = await Revenues.findByPk(1);
            const payment_status = await revenue.dataValues.payment_status;
            const installment = await Installments.findAll({where: {revenue: 1}})
            let count = 0, paid_installments = 0;
            for (index of installment){
                count++;
                console.log(count)
                if (index.dataValues.status !== payment_status) {
                        if(index.dataValues.status === "paid"){
                            paid_installments++;
                        }
                    }

                    
                }
                if (count === paid_installments){
                    console.log("ta tudo certo chef")
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