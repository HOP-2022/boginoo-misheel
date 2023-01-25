const mongoose = require("mongoose")

const boginooSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl:String,
    id: String,
    userId:{
        type:  mongoose.Schema.ObjectId,
        ref: "User",
    }
});

module.exports = mongoose.model("Link", boginooSchema);

