const express = require('express');
const router = express.Router();
const installmentsController = require('../controller/installments.controller');

router.post('/installments', installmentsController.createInstallment);
router.get('/installments', installmentsController.getAllInstallments);
router.get('/installments/:id', installmentsController.getInstallmentById);
router.put('/installments/:id', installmentsController.updateInstallment);
router.delete('/installments/:id', installmentsController.deleteInstallment);

module.exports = router;
