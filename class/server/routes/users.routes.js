const express = require('express');
const router = express();
const {findUser, findSingleUser, createUser, updateUser, deleteUser, login} = require('../controllers/user.controllers');
const { authenticate } = require('../config/jwt.config');

router.get('/usuarios',authenticate, findUser);
router.get('/usuarios/:id', authenticate, findSingleUser);
router.post('/usuarios/new', createUser);
router.put('/usuarios/update/:id', authenticate, updateUser);
router.delete('/usuarios/delete/:id', authenticate, deleteUser);

router.post('/login', login);

module.exports = router;