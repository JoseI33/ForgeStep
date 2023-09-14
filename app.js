const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const usersRoute = require('./src/router/user');
const favoriteRouter = require("./src/router/favorite");

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('api/users', usersRoute);
app.use("api/favorites", favoriteRouter);

module.exports = app