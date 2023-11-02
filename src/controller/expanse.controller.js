const db = require("../models");
const Expanse = db.Expanse;
const Installments = db.Installments;

exports.createExpanse = (req, res) => {
    Expanse.create(req.body)
        .then((expanse)=>{
            function addMonths(date, months) {
                date.setMonth(date.getMonth() + months);
              
                return date;
              }              

            for (let index = 0; index < expanse.installments; index++) {
                const date = new Date(expanse.competence);
                const newDate = addMonths(date, index);
                Installments.create({expanse: expanse.id, installment: expanse.installment, competence: newDate, status: expanse.status});
                
            }
            res.status(201).json(expanse)
        })
        .catch((error)=>{
            console.log(error)
            res.status(500).json({error: "Cannot create expanse"});
        });
}

exports.findAllExpanses = (req, res) => {
    Expanse.findAll()
        .then((expanse)=>{
            console.log("mama")
            res.status(200).json(expanse)
        })
        .catch((error)=>{
            console.log(error)
            res.status(500).json({error: "Error retriving expanses"});
        })
}

exports.findOneExpanse = (req, res) => {
    const id = req.params.id;

    Expanse.findByPk(id)
        .then((expanse)=>{
            if (!expanse) {
                res.status(404).json("Cannot find expanse")
            }
            res.status(200).json(expanse);
        })
        .catch((error)=>{
            res.status(500).json({error: "Error trying to find expanse"});
        });
}

exports.updateExpanse = (req, res) => {
    const id = req.params.id;

    Expanse.findByPk(id)
        .then((expanse) => {
            if(!expanse) {
                res.send(404).json({error: "legal expanse not found"});
            }
            Expanse
            .update(req.body)
            .then((updatedExpanse) => {
                res.status(200).json(updatedExpanse)
            })
            .catch((error) => {
                res.status(500).json({error: "Error updating expanse"});
            })
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrive expanse"});
        })    
}

exports.deleteExpanse = (req, res) => {
    const id = req.params.id;

    Expanse.destroy({where: {id: id}})
        .then(() => {
            res.status(200).json({message: "Expanse was deleted"});
        })
        .catch((error) => {
            res.status(500).json({error: "error trying to delete expanse"})
        })
}
