// importing mongoose for creating schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: trure
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// telling mongoose that this is a model
const user = mongoose.model('User', userSchema);

// exporting it
module.exports = User;