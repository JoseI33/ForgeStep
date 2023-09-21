const express = require('express')
const router = express.Router();

const userController = require('../controller/userController');
const {isAuth, isAdmin} = require('../middleware/authenticated');

router.get('/',  userController.getUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id',userController.deleteUser);

module.exports = router;
