const express = require('express')
const router = express.Router();

const userController = require('../controller/userController');


router.get('/',/*authMD.isAuth, authMD.isAdmin,*/  userController.getUsers);
router.post('/',/*authMD.isAuth, authMD.isAdmin,*/  userController.createUser);

module.exports = router;
