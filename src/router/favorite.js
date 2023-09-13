const express = require('express');
const router = express.Router();
const favoriteController = require("../controller/favoriteController");

router.post("/",favoriteController.favoriteCreate);

module.exports = router;