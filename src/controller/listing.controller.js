const db = require('../models');
const Revenues = db.Revenues;
const Expanse = db.Expanse;

exports.getList = async (req, res) => {
    try {
        const dateFinder = await req.body;
        console.log(dateFinder.date);
        const revenues = await Revenues.findAll();
        const expanses = await Expanse.findAll();
        res.status(200).json({revenues: revenues, expanses: expanses});
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error getting Revenue' });
      }      
}

