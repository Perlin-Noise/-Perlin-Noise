const mongoose = require('mongoose')
const Device= new mongoose.Schema({
    deviceid : String,
    
    status: String,
    photo : img,
    userid : String
})
module.exports = mongoose.model("device",Device);