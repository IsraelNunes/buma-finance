const express = require('express');
const router = require('express').Router();
const revenues = require("../controller/revenues.controller");

router.post('/revenues', revenues.createRevenue);
router.get('/revenues', revenues.getAllRevenues);
router.get('/revenues/:id', revenues.getRevenuesByID);
router.put('/revenues/:id', revenues.updateRevenue);
router.delete('/revenues/:id', revenues.deleteRevenue);

//installments 
router.put('/revenues_installment', revenues.updateInstallment);
router.put('/revenues_installment', revenues.deleteInstallment);

module.exports = router;
