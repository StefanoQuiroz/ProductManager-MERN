const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    nombre : {
        type: String,
        required: [true, "El nombre del animal es requerido"],
        minlength: [2, "El nombre del animal debe ser mayor a 2 caracteres"]
    },
    cantidadPatas: {
        type: String,
        required : [true, "Ingrese la cantidad de patas"],
        max: [4, "No existe animal con mas de 4 patas"]
    },
    color: String
})

const Animal = mongoose.model("animales", AnimalSchema);

module.exports = Animal;