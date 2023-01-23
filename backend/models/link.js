const mongoose = require("mongoose")

const boginooSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl:String,
    id: String,
    userId:String,
});

module.exports = mongoose.model("Link", boginooSchema);

