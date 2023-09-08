require ('dotenv').config();

const express = require('express');
const app = express();
const port = 3010;

const CONNECTDB = require('./Database/bd');
const bodyparser = require('body-parser');
CONNECTDB();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.listen (port, () => {
    console.log(`connection the port ${port}`);
})

