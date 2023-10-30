const express = require("express");
const router = require("express").Router();
const expanse = require("../controller/expanse.controller");

router.post('/expanse', expanse.createExpanse);
router.get('/expanse', expanse.findAllExpanses);
router.get('expanse/:id', expanse.findOneExpanse);
router.put('expanse/:id', expanse.updateExpanse);
router.delete('/expanse', expanse.deleteExpanse);

module.exports = router;