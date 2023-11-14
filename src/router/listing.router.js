const router = require('express').Router();
const listing = require('../controller/listing.controller');

router.get('/listing', listing.getList);

module.exports = router;