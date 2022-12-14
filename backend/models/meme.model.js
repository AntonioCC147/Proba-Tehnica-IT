const { string } = require("joi");
const mongoose = require("mongoose");

const MemeSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Meme = mongoose.model("Meme", MemeSchema);

module.exports = Meme;