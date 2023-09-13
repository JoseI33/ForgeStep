require ('dotenv').config();

const app = require('./app')

const CONNECTDB = require('./src/config/bd');
CONNECTDB();

const port = 3010;

app.listen (port, () => {
    console.log(`connection the port ${port}`);
})

