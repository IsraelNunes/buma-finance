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
        })
}