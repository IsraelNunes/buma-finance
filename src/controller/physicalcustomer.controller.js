const db = require('../models');
const PhysicalCustomers = db.PhysicalCustomer;

exports.createPhysicalCustomers = (req, res) => {
    PhysicalCustomers.create(req.body)
        .then((physicalcustomer) => {
            res.status(201).json(physicalcustomer);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({error: 'Error creating physical customer'});
        });
};

exports.getAllPhysicalCustomers = (req, res) => {
    PhysicalCustomers.findAll()
        .then((physicalcustomers) => {
            res.status(200).json(physicalcustomers);
        })
        .catch((error) => {
            res.status(500).json({error: 'Error getting physical customer'});
            console.log(error)
        })
}

exports.getPhysicalCustomersByID = (req, res) => {
    const id = req.params.id;

    PhysicalCustomers.findByPk(id)
        .then((physicalcustomers) => {
            if (!physicalcustomers) {
                res.send(404).json({error: "physical customer not found"});
            }
            res.status(200).json(physicalcustomers);
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrieve physical customer"});
        })
}

exports.updatePhysicalCustomers = (req, res) => {
    const id = req.params.id;

    PhysicalCustomers.findByPk(id)
        .then((physicalcustomers) => {
            if(!physicalcustomers) {
                res.send(404).json({error: "physical customer not found"});
            }
            physicalcustomers
            .update(req.body)
            .then((updatedPhysicalCustomers) => {
                res.status(200).json(updatedPhysicalCustomers)
            })
            .catch((error) => {
                res.status(500).json({error: "Error updating physical customer"});
            })
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({error: "Error trying to retrive physical customer"});
        })    
}

exports.deletePhysicalCustomer = (req, res) => {
    const id = req.params.id;

    PhysicalCustomers.destroy({where: {id: id}})
        .then(() => {
            res.status(200).json({message: "physical customer was deleted"});
        })
        .catch((error) => {
            res.status(500).json({error: "error trying to delete physical customer"})
        })
}
