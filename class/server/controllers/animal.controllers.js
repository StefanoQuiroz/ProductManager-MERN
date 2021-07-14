const Animal = require('../models/animals.model');

const findAnimal = (req,res) => {
    Animal.find({})
        .then(result => res.json(result))
        .catch(error => {
            res.json(error);
            res.sendStatus(404)
        })
}

const findSingleAnimal = (req,res) => {
    Animal.findById(req.params.id)
        .then(result => res.json(result))
        .catch(error => {
            res.json(error);
            res.sendStatus(404)
        })
}

const newAnimal = (req,res) => {
    Animal.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.json(error);
            res.sendStatus(500)
        })
}

const updateAnimal = (req,res) => {
    Animal.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(result => res.json(result))
        .catch(error => {
            res.json(error);
            res.sendStatus(500);
        })
}

const deleteAnimal = (req,res) => {
    Animal.deleteOne({_id:req.params.id})
        .then(result => res.json(result))
        .catch(error => {
            console.error(error);
            res.json(error);
        })
}

module.exports = {findAnimal, findSingleAnimal, newAnimal, updateAnimal, deleteAnimal};