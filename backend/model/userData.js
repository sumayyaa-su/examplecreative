// user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userImage:String,
    userId:String,
    userName:String,
    userEmail:String,
    userBio:String,
    userPassword:String
    
});

module.exports = mongoose.model('User', userSchema);