const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.connect('mongodb://student:qwerty1@ds153422.mlab.com:53422/testproject', {
    useNewUrlParser: true
});


let UserSchema = mongoose.Schema({
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
    }
    // hashedPassword: {
    //     type: String,
    //     required: true,
    // },
    // salt: {
    //     type: String,
    //     required: true,
    // }
});

// UserSchema.methods.encryptPassword = function (password) {
//     return crypto.createHmac('shal', this.salt).update(password).digest('hex');
// };
//
// UserSchema.virtual('password')
//     .set(function (password) {
//         this._plainPassword = password;
//         this.salt = Math.random() + '';
//         this.hashedPassword = this.encryptPassword(password);
//     })
//     .get(function () {
//         return this._plainPassword
//     });
//
// UserSchema.methods.checkPassword = function (password) {
//     return this.encryptPassword(password) === this.hashedPassword;
// };


let User = mongoose.model('User', UserSchema);
module.exports = User;
