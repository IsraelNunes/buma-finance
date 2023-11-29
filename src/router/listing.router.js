const router = require('express').Router();
const listing = require('../controller/listing.controller');

router.get('/listing', listing.getList);
router.get('/installments', listing.getInstallments);

module.exports = router;