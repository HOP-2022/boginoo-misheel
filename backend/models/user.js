const mongoose = require("mongoose")

const boginooSchema = new mongoose.Schema({
   email: String,
   password:String,
});

module.exports = mongoose.model("User", boginooSchema);

