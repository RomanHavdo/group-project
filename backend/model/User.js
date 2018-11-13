const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    dateOfbirth: {
        type: String,
    },
    sex: {
        type: String,
    },
    homeAddress: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: Number,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;