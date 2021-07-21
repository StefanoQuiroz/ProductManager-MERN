const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    nombre : {
        type: String,
        required: [true, "El nombre del animal es requerido"],
        //minlength: [2, "El nombre del animal debe ser mayor a 2 caracteres"]
    },
    tipo: {
        type: String,
        required : [true, "seleccione el tipo del animal"],
        //max: [4, "No existe animal con mas de 4 patas"]
    },
    color: {
        type: String,
        required : [true, "seleccione el color del animal"]
    },
    tamanho : String,
    fecha: Date,
    //tiene la informacion del Usuario
    propietarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
}, {timestamps:true});
AnimalSchema.virtual('propietario' , {
    ref: "User",
    localField : "propietarioId",
    foreignField: '_id'
})

AnimalSchema.set("toObject", {virtuals: true});
AnimalSchema.set("toJSON", {virtuals: true});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;