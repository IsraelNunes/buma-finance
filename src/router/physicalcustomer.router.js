const express = require('express');
const router = require('express').Router();
const physicalcustomer = require('../controller/physicalcustomer.controller');

router.post('/physicalcustomer', physicalcustomer.createPhysicalCustomers);
router.get('/physicalcustomer', physicalcustomer.getAllPhysicalCustomers);
router.get('/physicalcustomer/:id', physicalcustomer.getPhysicalCustomersByID);
router.put('/physicalcustomer/:id', physicalcustomer.updatePhysicalCustomers);
router.delete('/physicalcustomer/:id', physicalcustomer.deletePhysicalCustomer);

module.exports = router;