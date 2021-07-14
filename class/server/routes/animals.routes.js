const express = require('express');
const router = express();
const {findAnimal, findSingleAnimal, newAnimal, updateAnimal, deleteAnimal} = require('../controllers/animal.controllers');

router.get('/animales', findAnimal);
router.get('/animales/:id', findSingleAnimal);
router.post('/animales/new', newAnimal);
router.put('/animales/update/:id', updateAnimal);
router.delete('/animales/delete/:id', deleteAnimal);

module.exports = router;
