const mongoose = require('mongoose');
mongoose.connect('mongodb://student:qwerty1@ds153422.mlab.com:53422/testproject', {
    useNewUrlParser: true
});


let UserSchema = mongoose.Schema({
    name: {
        type: String,
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
        unique:true,
        required: true,
        trim: true,
    },
    phone: {
        type: Number,
        trim: true,
    },
    password:{
        type:String,
        required: true,
    },
//     hashedPassword: {
//         type: String,
//         required: true,
//     },
//     salt: {
//         type: String,
//         required: true,
//     }
});


let User = mongoose.model('User', UserSchema);
module.exports = User;
