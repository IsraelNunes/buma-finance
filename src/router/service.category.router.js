const express = require("express");
const router = require("express").Router();
const service_category = require("../controller/service_category.controller");

router.post('/service_category', service_category.createService_Category);
router.get('/service_category', service_category.getAllService_Category);

module.exports = router;
