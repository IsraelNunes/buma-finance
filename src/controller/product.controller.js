const express = require('express');
const router = express.Router();
const { Product_Categories } = require('../models');

router.post('/', async (req, res) => {
    try {
        const { name} = req.body;
        const newCategory = await Product_Categories.create(name);
        res.status(201).json(newCategory);
    } catch (err) {
        console.error(err);
        res.status(500).json({message : 'server error'});
    }
})

module.exports = router;