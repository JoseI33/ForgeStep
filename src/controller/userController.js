const userModels = require('../models/user');

// Llama al usuario
const getUsers = async (req, res) => { // req es una repeticion, res es una respuesta.
    try {
        const users = await userModels.find();
        return res.status(200).send(users);
    } catch (error) {
       console.log(error);
       res.status(500).json(error)
    }
};

// Crea el usuario
const createUser = async (req, res) => { 
    const {name, email, password, role} = req.body 
   
    
    const newUser = new userModels ({ //Trae la informacion de usercreate y crea un usuario.
        name,
        email,
        password,
        role,
    });
    try { // Control de errores.
        const SaveUser = await newUser.save();
        console.log(SaveUser);
        return res.status(200).send(SaveUser);
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg:"user does not exist"})
    }

    console.log(req.body);
};

// Recupera la contraseña.


module.exports = {
    getUsers,
    createUser,
};