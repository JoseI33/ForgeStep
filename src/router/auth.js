const express = require('express');
const router = express.Router();

const authController = require('../controller/authController');
const { isAuth } = require('../middleware/authenticated');

router.post('/register',isAuth, authController.register);
router.get('/login',isAuth, authController.login);

module.exports = router;