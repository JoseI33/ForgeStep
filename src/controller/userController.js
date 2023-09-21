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

// Edita el usuario.
const updateUser = async (req, res) => {
    const user = await user.findByIdUpdate(req.params.id, req.body, {
        new: true,
    });
    if(!user) return res.status(400).json({msg:"User not found."});
    res.json(user);
}

// Elimina al usuario.
const deleteUser = async (req, res) => {
    const user = await user.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found." });
  
    res.json(user);
  };

// Recupera la contraseña.


module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};