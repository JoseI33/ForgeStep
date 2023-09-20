//Para crear usuarios.
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ // Un objecto de un modelo que crearemos.

    name:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true //Con esto le decimos que sea unico y no se repita.
    },
    password: {
        type: String, //Es una cadena de texto.
        require: true,
    },
    role: {
        type: String,
        default: "user",
        enum:["user", "admin"],
    }


})

module.exports = mongoose.model('Users', UserSchema); //Utilizamos el metodo modelo, llamamos a la base de datos.