const express = require("express");
const router = require("express").Router();
const service = require("../controller/service.controller");

router.post("/service", service.createService);
router.get("/service", service.getAllService);
router.get("/service/:id", service.getServiceByID);
router.delete("/service/:id", service.deleteService);
router.put("/service/:id", service.updateService);




module.exports = router;