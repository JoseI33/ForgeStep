require ('dotenv').config();
const CONNECTDB = require('./src/Database/bd');
const app = require('./app');

const port = 3010;


CONNECTDB();


app.listen (port, () => {
    console.log(`connection the port ${port}`);
})

