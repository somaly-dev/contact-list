const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    email: String,
    password: String,
    createdAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('User', userSchema);

