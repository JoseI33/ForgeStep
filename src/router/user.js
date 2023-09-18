const express = require('express')
const router = express.Router();

const userController = require('../controller/userController');
const {isAuth, isAdmin} = require('../middleware/authenticated');// No esta tomando la direccion.

router.get('/',isAuth,  userController.getUsers); // No esta tomando las funcionnes del middleware.
router.post('/',isAuth, userController.createUser);

module.exports = router;
