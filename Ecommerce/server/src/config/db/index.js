const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.MONGODB_URL

async function connect() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(uri, {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully !!!')
    } catch (error) {
        console.log('Connect fail !!!')
    }
}

module.exports = { connect };