let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    createdAt: Date,
    completedMemories: [String],
});

let websiteSchema = new mongoose.Schema({
    
})

module.exports = new mongoose.model('User',userSchema);