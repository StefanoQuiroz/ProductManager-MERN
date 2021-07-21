const Animal = require('../models/animals.model');
const {populate} = require('../models/animals.model');
const jwt = require('jsonwebtoken');
const {secretKey} = require('../config/jwt.config');

const findAnimal = (req,res) => {
    const filter = {};
    if(req.query.nombre){
        filter.nombre = req.query.nombre;
    }
    Animal.find(filter).populate("propietario")
        .then(result => res.json({data:result}))
        .catch(error => {
            res.json({error:error, message:"Something went wrong"});
            res.sendStatus(404)
        })
}

const findSingleAnimal = (req,res) => {
    Animal.findById(req.params.id).populate("propietario")
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

const adoptarAnimal = (req, res) => {
    Animal.findById(req.params.id)
        .then(animal => {
            jwt.verify(req.cookies.usertoken, secretKey, (err, payload) => {
                if(err){
                    res.status(401).json({verified:false})
                } else {
                    //console.log('PAYLOAD', payload)
                    animal.propietarioId = payload._id;
                    animal.fecha = new Date();
                    Animal.findOneAndUpdate({_id: animal._id}, animal, {useFindAndModify:false})
                    //Animal.findByIdAndUpdate(animal._id, animal, {useFindAndModify:true})
                        .then(result => res.json({data:result}))
                        .catch(error => {
                            res.json({error:error, message:"Something went wrong with adopt an animal"});
                            res.sendStatus(500)
                        })
                }
            })
        })
        .catch(error => {
            res.json({error:error, message:"No existe el animal"});
            res.sendStatus(404)
        })
}

module.exports = {findAnimal, findSingleAnimal, newAnimal, updateAnimal, deleteAnimal, adoptarAnimal};