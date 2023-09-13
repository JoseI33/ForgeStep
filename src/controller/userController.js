const userModels = require('../router/user');

const getUsers = async (req, res) => { // req es una repeticion, res es una respuesta.
    try {
        const users = await userModels.find();
        if (users) {
            return res.status(200).send(users);
        } else {
            return res.status(200).send([]);
        }
    } catch (error) {
       console.log(error);
       res.status(500).send(error)
    }
};

const createUser = async (req, res) => { 
    const {name, email, password} = req.body 
   
    
    const newUser = new userModels ({ //Trae la informacion de usercreate y crea un usuario.
        name,
        email,
        password
    })
    try { // Control de errores.
        const user = await newUser.save();
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg:"Error"})
    }

    console.log(req.body);
};

module.exports = {
    getUsers,
    createUser,
};