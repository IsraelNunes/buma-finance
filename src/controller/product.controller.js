const { where } = require("sequelize");
const db = require("../models");
const products = require("../models/products");
const Product = db.Product;

exports.createProduct = (req, res) => {
    console.log(req.body);
    Product.create(req.body)
        .then((products) => {
            res.status(201).json(products);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: 'Error creating Product Category'});
        });
};

exports.getAllProduct = (req, res) => {
    Product.findAll()
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((error) => {
            res.status(500).json({error: 'Error getting products'});
            console.log(error)
        })
}

exports.getProductByID = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then((products) => {
            if (!products) {
                res.send(404).json({error: "Product not found"});
            }
            res.status(200).json(products);
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrieve Product"});
        })
}

exports.updateProduct = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then((products) => {
            if(!products) {
                res.send(404).json({error: "Product not found"});
            }
            products
            .update(req.body)
            .then((updatedProduct) => {
                res.status(200).json(updatedProduct)
            })
            .catch((error) => {
                res.status(500).json({error: "Error updating product"});
            })
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrive Product"});
        })    
}

exports.deleteProduct = (req, res) => {
    const id = req.params.id;

    Product.destroy({where : {id : id}})
        .then(()=>{
            res.status(204).json({message: "Product was deleted"});
        })
        .catch((error) => {
            res.status(500).json({error: "Error deleting product"})
        })
}