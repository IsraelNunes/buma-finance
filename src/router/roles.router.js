const express = require('express');
const router = require('express').Router();
const roles = require('../controller/roles.controller');

router.post('/roles', roles.createRoles);
router.get('/roles', roles.findAllRoles);
router.get('/roles/:id', roles.findRoleByPK);
router.put('/roles/:id', roles.updateRole);
router.delete('/roles/:id', roles.deleteRole);

module.exports = router;