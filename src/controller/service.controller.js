const db = require("../models");
const Service = db.Service;

exports.createService = (req, res) => {
    Service.create(req.body)
        .then((services) => {
            console.log(services)
            res.status(201).json(services);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({error: 'Error creating Service'});
        })
}

exports.getAllService = (req, res) => {
    Service.findAll()
        .then((services) => {
            res.status(200).json(services);
        })
        .catch((error) => {
            res.status(500).json({error: 'Error getting services'});
            console.log(error)
        })
}

exports.getServiceByID = (req, res) => {
    const id = req.params.id;

    Service.findByPk(id)
        .then((services) => {
            if (!services) {
                res.send(404).json({error: "Service not found"});
            }
            res.status(200).json(services);
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrieve Service"});
        })
}

exports.updateService = (req, res) => {
    const id = req.params.id;

    Service.findByPk(id)
        .then((services) => {
            if(!services) {
                res.send(404).json({error: "Service not found"});
            }
            Services
            .update(req.body)
            .then((updatedService) => {
                res.status(200).json(updatedService)
            })
            .catch((error) => {
                res.status(500).json({error: "Error updating Service"});
            })
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrive Service"});
        })    
}

exports.deleteService = (req, res) => {
    const id = req.params.id;

    Service.destroy({where : {id : id}})
        .then(()=>{
            res.status(204).json({message: "Service was deleted"});
        })
        .catch((error) => {
            res.status(500).json({error: "Error deleting Service"})
        })
}