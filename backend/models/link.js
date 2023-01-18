const mongoose = require("mongoose")

const boginooSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl:String,
    id: String
});

module.exports = mongoose.model("Link", boginooSchema);

