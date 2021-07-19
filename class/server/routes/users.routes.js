const express = require('express');
const router = express();
const {findUser, findSingleUser, createUser, updateUser, deleteUser} = require('../controllers/user.controllers');

router.get('/usuarios', findUser);
router.get('/usuarios/:id', findSingleUser);
router.post('/usuarios/new', createUser);
router.put('/usuarios/update/:id', updateUser);
router.delete('/usuarios/delete/:id', deleteUser);

module.exports = router;