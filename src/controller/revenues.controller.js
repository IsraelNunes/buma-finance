const db = require("../models");
const Revenues = db.Revenues;

exports.createRevenue = (req, res) => {
    Revenues.create(req.body)
        .then((revenues) => {
            console.log(revenues)
            res.status(201).json(revenues);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({error: 'Error creating Revenue'});
        })
}

exports.getAllRevenues = (req, res) => {
    Revenues.findAll()
        .then((revenues) => {
            res.status(200).json(revenues);
        })
        .catch((error) => {
            res.status(500).json({error: 'Error getting Revenue'});
            console.log(error)
        })
}

exports.getRevenuesByID = (req, res) => {
    const id = req.params.id;

    Revenues.findByPk(id)
        .then((revenues) => {
            if (!revenues) {
                res.send(404).json({error: "Revenues not found"});
            }
            res.status(200).json(revenues);
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrieve Revenue"});
        })
}

exports.updateRevenue = (req, res) => {
    const id = req.params.id;

    Revenues.findByPk(id)
        .then((revenue) => {
            if(!revenue) {
                res.send(404).json({error: "Revenue not found"});
            }
            Revenuess
            .update(req.body)
            .then((updatedRevenue) => {
                res.status(200).json(updatedRevenue)
            })
            .catch((error) => {
                res.status(500).json({error: "Error updating Revenue"});
            })
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrive Revenue"});
        })    
}

exports.deleteRevenue = (req, res) => {
    const id = req.params.id;

    Revenues.destroy({where : {id : id}})
        .then(()=>{
            res.status(200).json({message: "Revenue was deleted"});
        })
        .catch((error) => {
            res.status(500).json({message: "Error deleting Revenue"})
        })
}