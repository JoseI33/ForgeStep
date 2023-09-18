const jwt = require('../Utils/jwt.js');

const isAuth = (req, res, next) => {// next es para que pase el siguiente.
    if (!req.headers.authorization) {
        return res.status(400).send({ msg: "Authorization header missing" });
    } else {
        const token = req.headers.authorization.replace("Bearer ", "")

        try {
            const payload = jwt.decoded(token)
            try {
                req.user = payload
                next();
            } catch (error) {
                res.status(500).send({msg:"Error"});
            }
        } catch (error) {
            console.log(error);
            res.status(400).send({ msg: "Error you are not authorized" });
        }
    }

}

const isAdmin = (req, res, next) => {
    if(req.user.role && req.user.role === "Admin"){
        return next()
    }else {
        return res.status(404).send({msg:"You don't have the required role for this resource."})
    };
}

module.exports = {
    isAuth,
    isAdmin
}