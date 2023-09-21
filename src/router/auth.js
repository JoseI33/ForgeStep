const express = require('express');
const router = express.Router();

const authController = require('../controller/authController');
const {isAuth} = require('../middleware/authenticated');

router.post('/register', authController.register);
router.get('/login', authController.login);

module.exports = router;