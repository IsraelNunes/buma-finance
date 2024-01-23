const db = require('../models');
const { Op } = require("sequelize");
const Revenues = db.Revenues;
const Expanse = db.Expanse;
const Installments = db.Installments;

exports.getList = async (req, res) => {
    try {
// Needs send a specific date in json format to work 
        const dateFinder = await req.body;
        const date = dateFinder.date
        console.log(dateFinder.date);
        console.log(date)
        const revenues = await Revenues.findAll({
          where: {
            due_date: {
              [Op.startsWith] : date
            }
          }
        });
        const expanses = await Expanse.findAll({
          where: {
            due_date: {
              [Op.startsWith] : date
            }
          }
        });
        res.status(200).json({revenues: revenues, expanses: expanses});
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error getting Revenue' });
      }      
}

exports.getInstallments = async (req, res) => {
  try{
      const dateFinder = await req.body;
      const date = dateFinder.date
      console.log(date);
      const installments = await Installments.findAll({
        where: {
          date: {
            [Op.startsWith] : date
          }
        }
      })
      console.log(installments[0]);
      res.status(200).json(installments)
  } catch(error) {
    console.log(error)
    res.status(500).json({error: 'Error getting installments'});
  }
}
