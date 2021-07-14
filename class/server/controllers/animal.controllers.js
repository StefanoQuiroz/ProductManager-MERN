const Animal = require('../models/animals.model');

const findAnimal = (req,res) => {
    const filter = {};
    if(req.query.nombre){
        filter.nombre = req.query.nombre;
    }
    Animal.find(filter)
        .then(result => res.json({data:result}))
        .catch(error => {
            res.json({error:error, message:"Something went wrong"});
            res.sendStatus(404)
        })
}

const findSingleAnimal = (req,res) => {
    Animal.findById(req.params.id)
        .then(result => res.json({data:result}))
        .catch(error => {
            res.json({error:error, message:"Something went wrong"});
            res.sendStatus(404)
        })
}

const newAnimal = (req,res) => {
    Animal.create(req.body)
        .then(result => res.json({data:result}))
        .catch(error => {
            res.json({error:error, message:"Something went wrong"});
            res.sendStatus(500)
        })
}

const updateAnimal = (req,res) => {
    Animal.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(result => res.json({data:result}))
        .catch(error => {
            res.json({error:error, message:"Something went wrong"});
            res.sendStatus(500);
        })
}

const deleteAnimal = (req,res) => {
    Animal.deleteOne({_id:req.params.id})
        .then(result => res.json({data:result}))
        .catch(error => {
            res.json({error:error, message:"Something went wrong"});
            res.sendStatus(202);
        })
}

module.exports = {findAnimal, findSingleAnimal, newAnimal, updateAnimal, deleteAnimal};