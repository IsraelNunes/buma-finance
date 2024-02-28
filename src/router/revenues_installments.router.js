const router = require('express').Router();
const installments = require('../controller/revenues_installments.controller');

router.get('/revenues_installments', installments.getAllInstallments);
router.put('/revenues_installments/:id', installments.updateInstallment);
router.put('/revenues_installments/id', installments.deleteInstallment);

module.exports = router;