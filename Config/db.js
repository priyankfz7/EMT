const { default: mongoose } = require("mongoose");

let connection = mongoose.connect("mongodb://127.0.0.1:27017/myusers");

//using my local mongo database

module.exports = { connection };
