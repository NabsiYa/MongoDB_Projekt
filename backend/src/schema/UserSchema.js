const mongoose = require('mongoose');

// Create our mongoose schema.
const schema = mongoose.Schema({
    username: String,
    date: Date,
});

// Create our user model.
const userModel = mongoose.model("user", schema);

module.exports = userModel;