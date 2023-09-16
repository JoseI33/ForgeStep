const express = require('express')
const router = express.Router();

const {
    getUsers,
    createUser,
} = require('../controller/userController');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;
