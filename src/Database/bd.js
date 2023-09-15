const mongoose = require('mongoose');

const CONNECTDB= async () => {
    try {
        await mongoose.connect(process.env.CONNECTDB);
        console.log('Connect exist');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = CONNECTDB