//Para crear productos.
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({ // Un objecto de un modelo que crearemos.

    mark:{
        type: String,
        require: true,
    },
    models: {
        type: String,
        require: true,
        unique: true //Con esto le decimos que sea unico y no se repita.
    },
    price: {
        type: String, //Es una cadena de texto.
        require: true,
    }


})

module.exports = mongoose.model('', UserSchema); //Utilizamos el metodo modelo, llamamos a la base de datos.