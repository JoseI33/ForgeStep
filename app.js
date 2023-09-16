const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const usersRoute = require('./src/router/user.js');
const authRoute = require('./src/router/auth.js')

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);

module.exports = app;