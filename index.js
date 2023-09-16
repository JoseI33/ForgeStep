require ('dotenv').config();
const CONNECTDB = require('./src/config/bd');
const app = require('./app');
const port = 3010;

const bodyparser = require('body-parser');
CONNECTDB();

app.listen (port, () => {
    console.log(`connection the port ${port}`);
})

