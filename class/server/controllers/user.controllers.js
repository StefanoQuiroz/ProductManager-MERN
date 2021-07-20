const Usuario = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt.config');


/* const register = (req, res) => {
    const user = new Usuario(req.body);
    user
        .save()
        .then(usuario => res.json({usuario : usuario}))
        .catch(err => {
            res.json({error: err});
            res.sendStatus(500);
        })
} */

const findUser = (req,res) => {
    const filter = {};
    Usuario.find(filter)
        .then(result => res.json({data:result}))
        .catch(error => {
            res.json({error:error, message:"Something went wrong"});
            res.sendStatus(404)
        })
}

const findSingleUser = (req,res) => {
    Usuario.findById(req.params.id)
        .then(result => res.json({data:result}))
        .catch(error => {
            res.json({error:error, message:"Something went wrong"});
            res.sendStatus(404)
        })
}

const createUser = (req,res) => {
    //para evitar correos repetidos
    Usuario.findOne({email: req.body.email})
        .then(result => {
            if(result){
                res.json({error: true, message:"The emails is registered"})
            } else {
                Usuario.create(req.body)
                    .then(result => res.json({data:result}))
                    .catch(error => {
                        res.json({error:error, message:"Something went wrong"});
                        res.sendStatus(500)
                    })
            }
        });
}

const updateUser = (req,res) => {
    Usuario.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(result => res.json({data:result}))
        .catch(error => {
            res.json({error:error, message:"Something went wrong"});
            res.sendStatus(500);
        })
}

const deleteUser = (req,res) => {
    Usuario.deleteOne({_id:req.params.id})
        .then(result => res.json({data:result}))
        .catch(error => {
            res.json({error:error, message:"Something went wrong"});
            res.sendStatus(202);
        })
}

const login = (req, res) => {
    Usuario.findOne({email: req.body.email})
         .then(result => {
            if(result === null){
                res.json({error: true, message: "User not exists"})
            } else {
                bcrypt.compare(req.body.password, result.password)
                    .then(isValid => {
                        if(isValid){
                            const loggedUser = {
                                _id: result._id,
                                nombre: result.nombre,
                                apellido: result.apellido,
                                email: result.email
                            }
                            const token = jwt.sign(loggedUser, secretKey);
                            res.cookie("usertoken", token, secretKey, {httpOnly: true})
                                .json({message:"logIn", data: loggedUser})

                        } else {
                            res.json({error: true, message: "Invalidate password"})
                        }

                    })
                    .catch(err => res.json({
                        error: err, message:"User and passwords invalidate"
                    }))
            }
         })
         .catch(err => {
             res.json({error: err, message: "User or password invalidate"});
         })
}

module.exports = {findUser, findSingleUser, createUser, updateUser, deleteUser, login};