const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const products = require('./src/router/products');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/products', products);

module.exports = app