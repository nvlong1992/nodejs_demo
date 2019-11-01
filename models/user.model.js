const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    name: String,
    age: Number,
    password: String
});
var User = mongoose.model('Users', userSchema); //Map

module.exports = User;