const express = require("express");
const router = require("express").Router();
const expanse = require("../controller/expanse.controller");

router.post('/expanse', expanse.createExpanse);
router.get('/expanse', expanse.findAllExpanses);
router.get('/expanse/:id', expanse.findOneExpanse);
router.put('/expanse/:id', expanse.updateExpanse);
router.delete('/expanse/:id', expanse.deleteExpanse);


//installments
router.put('/expanse_installment/:id', expanse.updateInstallment);
router.delete('/expanse_installmente/:id', expanse.deleteInstallment);
module.exports = router;