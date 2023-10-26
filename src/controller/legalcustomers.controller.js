const db = require('../models');
const LegalCustomers = db.LegalCustomer;

exports.createLegalCustomers = (req, res) => {
    LegalCustomers.create(req.body)
        .then((legalcustomer) => {
            res.status(201).json(legalcustomer);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({error: 'Error creating legal customer'});
        });
};

exports.getAllLegalCustomers = (req, res) => {
    LegalCustomers.findAll()
        .then((legalcustomers) => {
            res.status(200).json(legalcustomers);
        })
        .catch((error) => {
            res.status(500).json({error: 'Error getting legal customer'});
            console.log(error)
        })
}

exports.getLegalCustomersByID = (req, res) => {
    const id = req.params.id;

    LegalCustomers.findByPk(id)
        .then((legalcustomers) => {
            if (!legalcustomers) {
                return res.status(404).json({error: "legal customer not found"});
            }
            res.status(200).json(legalcustomers);
        })
        .catch((error) => {
            console.log(error)
            res.send(500).json({error: "Error trying to retrieve legal customer"});
        })
}

exports.updateLegalCustomers = (req, res) => {
    const id = req.params.id;

    LegalCustomers.findByPk(id)
        .then((legalcustomers) => {
            if(!legalcustomers) {
                res.send(404).json({error: "legal customer not found"});
            }
            legalcustomers
            .update(req.body)
            .then((updatedLegalCustomers) => {
                res.status(200).json(updatedLegalCustomers)
            })
            .catch((error) => {
                res.status(500).json({error: "Error updating legal customer"});
            })
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrive legal customer"});
        })    
}

exports.deleteLegalCustomer = (req, res) => {
    const id = req.params.id;

    LegalCustomers.destroy({where: {id: id}})
        .then(() => {
            res.status(200).json({message: "legal customer was deleted"});
        })
        .catch((error) => {
            res.status(500).json({error: "error trying to delete legal customer"})
        })
}
