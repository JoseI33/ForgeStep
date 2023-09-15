const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const usersRoute = require('./src/router/user.js');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/api', usersRoute);

module.exports = app;