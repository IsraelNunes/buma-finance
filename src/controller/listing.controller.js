const db = require('../models');
const Revenues = db.Revenues;
const Expanse = db.Expanse;

exports.getList = async (req, res) => {
    try {
        const revenues = await Revenues.findAll();
        const expanses = await Expanse.findAll();
        const listing = {};
        for (let index = 0; index < expanses.length; index++) {
            if (listing.year.hasOwnProperty("")) {
                
            }            
        }
        listing.year = expanses[2].dataValues.competence.getFullYear();

        console.log(listing);
        res.status(200).json({revenues: revenues, expanses: expanses});
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error getting Revenue' });
      }      
}

