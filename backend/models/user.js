 const {Schema, model} = require('mongoose');
const mongoose = require("mongoose")



const boginooSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl:{
        type: String,
        required: false
    }
});

const boginoo = model('boginoo', boginooSchema);
module.exports = boginoo;

