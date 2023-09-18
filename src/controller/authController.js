const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../Utils/jwt');

const register = async (req, res) => {
    const {
        name, email, password, role
    } = req.body
    
    // Primer paso
    if (!email) {
        return res.status(400).send({ msg: "Email is required" });
    }
    if (!password) {
        return res.status(400).send({ msg: "Password is required" });
    }

    //Segundo paso
    const user = new userModel({
        name,
        email:email.toLowerCase(),
        password,
        role,
    })

    const salt = bcrypt.genSaltSync(Number(process.env.SALT)); //bcrypt encripta la base
    const passwordHash = bcrypt.hashSync(password, salt);
    user.password = passwordHash //la password representa la clave del usuario / la passwordHash es la nueva clave encriptada
    try {
        const newUsers = await user.save() //crea un nuevo usuario y lo guarda en la base.
        return res.status(200).send(newUsers) //retorna al usuario el nuevo usuario.
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"Failed to create user."});
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        return res.status(400).send({msg:"All fields are required."})
    }

    const emailLowerCase = email.toLowerCase();

    try {
        const findUser = await userModel.findOne({email:emailLowerCase})
       
        if(findUser) {
            const isMatch = bcrypt.compareSync(password, findUser.password) //compara el pass del usuario con el pass que le brinda bcrypt.
            if (isMatch) { //generamos token
                res.status(200).send({token:jwt.createToken(findUser)})
            }else {
                return res.status(400).send({msg:"Email or password are incorrect."})
            }
        }else {
            return res.status(400).send({msg:"User not found."});
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({msg:"User error not found."})
    }
}
module.exports = {
    register,
    login,
}