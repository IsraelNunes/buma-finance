const db = require("../models");
const Roles = db.Roles;

exports.createRoles = (req, res) => {
    Roles.create(req.body)
        .then((roles) => {
            res.status(201).json(roles);
        })
        .catch((error) => {
            res.status(500).json({error: "Error creating new role"});
        })
}

exports.findAllRoles = (req, res) => {
    Roles.findAll()
        .then((roles)=>{
            res.status(200).json(roles);
        })
        .catch((error) =>{
            res.status(500).json({error: "Error trying to retrieve roles"});
        })
}

exports.findRoleByPK = (req, res) => {
    const id = req.params.id;

    Roles.findByPk(id)
        .then((roles) => {
            if (!roles) {
                res.status(404).json({error: "Role not found"})
            }
            res.status(200).json(roles);
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrieve role"});
        })
}

exports.updateRole = (req, res) => {
    const id = req.params.id;

    Roles.findByPk(id)
        .then((roles) => {
            if (!roles) {
                res.status(404).json({error: "Role not found"})
            }
            roles.update(req.body)
                then((updatedRole) => {
                    res.status(200).json(updatedRole);
                })
                .catch((error) => {
                    res.status(500).json({error: "Error trying to update role"});
                })
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrieve role"});
        })
}

exports.deleteRole = (req, res) => {
    const id = req.params.id;

    Roles.destroy({where: {id: id}})
        .then(() => {
            res.status(200).json({message: "role was deleted"});
        })
        .catch((error) => {
            res.status(500).json({error: "error trying to delete role"});
        })
}