const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("users", usersSchema);