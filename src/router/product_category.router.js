const express = require("express");
const router = require("express").Router();
const product_category = require("../controller/product_category.controller");

router.post('/product_category', product_category.createProduct_Category);
router.get('/product_category', product_category.getAllProduct_Categories);
router.get('/product_category/:id', product_category.getProduct_CategoryByID);
router.put('/product_category/:id', product_category.updateProduct_Category);
router.delete('/product_category/:id', product_category.deleteProduct_category);

module.exports = router;
