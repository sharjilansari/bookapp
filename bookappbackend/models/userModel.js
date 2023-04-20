const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    ISBN: {
        type: String
    }
})

module.exports = mongoose.model("User", userSchema);