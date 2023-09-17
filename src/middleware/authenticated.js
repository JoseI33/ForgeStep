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

module.exports = {
    isAuth,
}