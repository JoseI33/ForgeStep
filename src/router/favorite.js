const express = require("express");
const router = express.Router();
const FavModel = require("../models/favorite");
const {createFavorites,deleteFavorites,getFavorites,} = require("../controller/favoriteController");

router.post("/", createFavorites);
router.delete("/:id", deleteFavorites);
router.get("/:id", getFavorites);

module.exports = router;