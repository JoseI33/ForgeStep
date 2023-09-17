const express = require('express')
const router = express.Router();
const AuthMD = require('../middleware/authenticated');

const userController = require('../controller/userController');

router.get('/',  userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;
