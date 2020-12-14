const mongoose = require('mongoose')
const User = new mongoose.Schema({
    userid : String,
    name : String, 
    email: String,
    password : String,
    deviceid : String
})
module.exports = mongoose.model("user",User);