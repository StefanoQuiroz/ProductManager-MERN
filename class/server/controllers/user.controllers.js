const Usuario = require('../models/users.model');

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
    Usuario.create(req.body)
        .then(result => res.json({data:result}))
        .catch(error => {
            res.json({error:error, message:"Something went wrong"});
            res.sendStatus(500)
        })
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

module.exports = {findUser, findSingleUser, createUser, updateUser, deleteUser};