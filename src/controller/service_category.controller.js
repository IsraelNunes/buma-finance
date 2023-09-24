const db = require('../models/');
const products = require('../models/products');
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

exports.getAllService_Category = (req, res) => {
    Service_Category.findAll() 
        .then((services) => {
            res.status(200).json(services);
        })
        .catch((error) => {
            res.status(500).json({error: "Could not retrieve services"});
        })
}

exports.getService_CategoryByID = (req, res) => {
    const id = req.params.id;

    Service_Category.findByPk(id)
        .then((products) => {
           if (!products) {
            res.status(404).json({error: "Product not found"});
           } 
           res.status(200).json(products);
        })
        .catch((error) => {
            res.status(500).json({error: "Error retriving service"});
        })
}

exports.updateService_Category = (req, res) => {
    const id = req.params.id;

    Service_Category.findByPk(id)
        .then((products) => {
            if(!products) {
                res.status(404).json({error: "Service not found"})
            }
            products
            .update(req.body)
            .then((updatedProduct) => {
                res.status(200).json(updatedProduct);
            })
            .catch((error) => {
                res.send(500).json({error: "Error updatating service category"})
            })
        })
        .catch((error) => {
            res.send(500).json({error: "Error retriveing service category"})
        })


}

exports.deleteService_Category = (req, res) => {
    const id = req.params.id;

    Service_Category.destroy({where: {id: id}})
        .then(() => {
            res.status(204).json({ message: "Service category deleted"});
        })
        .catch((error) => {
            res.status(500).json({error: "Error deleting service category"});
        })
}