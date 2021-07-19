const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    nombre : {
        type: String,
        required: [true, "Debe ingresar el nombre del usuario"]
    },
    apellido : {
        type: String,
        required: [true, "Debe ingresar el apellido del usuario"]
    },
    email : {
        type: String,
        required: [true, "Debe ingresar el email del usuario"],
        validate: {
            validator: val =>/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message : "Ingrese el formato email@email.com"
        }
    },
    password : {
        type: String,
        required: [true, "Debe ingresar el password del usuario"],
        minlength: [8, "El password debe tener mas de 8 caracteres"]
    },
}, {timestamps:true}) 

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Las contraseñas deben ser iguales!!!')
    }
    next();
})

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
})


const User = mongoose.model("User", UserSchema);

module.exports = User;