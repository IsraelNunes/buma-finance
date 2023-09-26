const db = require("../models");
const Employees =  db.Employees;

exports.createEmployee = (req, res) => {
    Employees.create(req.body)
        .then((employee)=>{
            res.status(201).json(employee)
        })
        .catch((error) => {
            res.status(500).json({error: "Error creating employee"});
        })
}

exports.findAllEmployees = (req, res) => {
    Employees.findAll()
        .then((employees) => {
            res.status(200).json(employees)
        })
        .catch((error) => {
            res.status(500).json({error: "Error retrieving employees"});
        })
}

exports.findEmployeeByPK = (req, res) => {
    const id = req.params.id;

    Employees.findByPk(id)
        .then((employee)=>{
            if(!employee) {
                res.status(404).json({error: "Employe not found"})
            }
            res.status(200).json(employee);
        })
        .catch((error) => {
            res.status(500).json({error: "Error retrieving employee"});
            console.log(error)
        })
}

exports.updateEmployee = (req, res) => {
    const id = req.params.id;

    Employees.findByPk(id)
        .then((employee)=>{
            if(!employee) {
                res.status(404).json({error: "Employe not found"})
            }
            employee.update(req.body)
                .then((updatedEmployee) => {
                    res.status(200).json(updatedEmployee);
                })
                .catch((error) => {
                    res.status(500).json({error: "Error updating employee"});
                })
        })
        .catch((error) => {
            res.status(500).json({error: "Error retrieving employee"});
        })
}

exports.deleteEmployee = (req, res) => {
    const id = req.params.id;

    Employees.destroy({where: {id: id}})
        .then(() => {
            res.status(200).json({message: "employee was deleted"});
        })
        .catch((error) => {
            res.status(500).json({error: "error trying to delete employee"})
        })
}