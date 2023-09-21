const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const usersRoute = require('./src/router/user.js');
const authRoute = require('./src/router/auth.js')
const products = require('./src/router/products');
const cors = require('cors');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', products);

module.exports = app;