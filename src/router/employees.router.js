const express = require('express');
const router = require('express').Router();
const employees = require("../controller/employees.controller");

router.post('/employees', employees.createEmployee);
router.get('/employees', employees.findAllEmployees);
router.get('/employees/:id', employees.findEmployeeByPK);
router.put('/employees/:id', employees.updateEmployee);
router.delete('/employees/:id', employees.deleteEmployee);

module.exports = router;
