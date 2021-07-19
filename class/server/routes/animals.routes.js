const express = require('express');
const router = express();
const {findAnimal, findSingleAnimal, newAnimal, updateAnimal, deleteAnimal} = require('../controllers/animal.controllers');
const { authenticate } = require('../config/jwt.config');

router.get('/animales', authenticate, findAnimal);
router.get('/animales/:id', authenticate, findSingleAnimal);
router.post('/animales/new', authenticate, newAnimal);
router.put('/animales/update/:id', authenticate, updateAnimal);
router.delete('/animales/delete/:id', authenticate, deleteAnimal);

module.exports = router;
