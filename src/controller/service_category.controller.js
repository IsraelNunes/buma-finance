const db = require('../models/');
const Service_Category = db.Service_Category

//create

exports.createService_Category = (req, res) => {
    Service_Category.create(req.body)
        .then((services) => {
            res.status(201).json(services);
        })
        .catch(error => {
            res.status(500).json({error: 'Error creating Service Category'});
        });
};

