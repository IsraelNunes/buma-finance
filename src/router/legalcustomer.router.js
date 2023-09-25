const express = require('express');
const router = require('express').Router();
const legalcustomer = require('../controller/legalcustomers.controller');

router.post('/legalcustomer', legalcustomer.createLegalCustomers);
router.get('/legalcustomer', legalcustomer.getAllLegalCustomers);
router.get('/legalcustomer/:id', legalcustomer.getLegalCustomersByID);
router.put('/legalcustomer/:id', legalcustomer.updateLegalCustomers);
router.delete('/legalcustomer/:id', legalcustomer.deleteLegalCustomer);

module.exports = router;