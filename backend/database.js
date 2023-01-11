
const mongoose = require("mongoose");

const uri = "mongodb+srv://admin:mishka092806@my-new-database.qon9y7g.mongodb.net/test"
mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database is successfully connected.");
    } catch(error){
        console.log(error)
    }
};

module.exports = connect;