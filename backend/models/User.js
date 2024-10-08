const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userID: { type: String, unique: true }, // Add userID field
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
