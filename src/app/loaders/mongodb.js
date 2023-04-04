const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://marcojr:xb369582@cluster0.a6kwepp.mongodb.net/test')
}

module.exports = startDB;