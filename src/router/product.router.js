const express = require("express");
const router = require("express").Router();
const product = require("../controller/product.controller");

router.post('/product', product.createProduct);
router.get('/product', product.getAllProduct);

module.exports = router;