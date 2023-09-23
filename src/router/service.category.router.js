const express = require("express");
const router = require("express").Router();
const service_category = require("../controller/service_category.controller");

router.post('/service_category', service_category.createService_Category);
router.get('/service_category', service_category.getAllService_Category);
router.get('/service_category/:id', service_category.getService_CategoryByID);
router.put('/service_category/:id', service_category.updateService_Category);
router.delete('/service_category/:id', service_category.deleteService_category);

module.exports = router;
