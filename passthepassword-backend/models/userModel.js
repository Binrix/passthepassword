let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    createdAt: Date,
    websites: [websiteSchema],
});

let websiteSchema = new mongoose.Schema({
    denomination: String,
    url: String,
    username: String,
    usernameSalt: String,
    password: String,
    passwordSalt: String,
})

module.exports = new mongoose.model('User',userSchema);