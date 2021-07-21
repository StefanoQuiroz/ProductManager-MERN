const express = require('express');
const router = express();
const {findAnimal, findSingleAnimal, newAnimal, updateAnimal, deleteAnimal, adoptarAnimal} = require('../controllers/animal.controllers');
const { authenticate } = require('../config/jwt.config');

router.get('/animales', authenticate, findAnimal);
router.get('/animales/:id', authenticate, findSingleAnimal);
router.post('/animales/new', authenticate, newAnimal);
router.put('/animales/update/:id', authenticate, updateAnimal);
router.patch('/animales/:id/propietario', authenticate, adoptarAnimal);
router.delete('/animales/delete/:id', authenticate, deleteAnimal);

module.exports = router;
 