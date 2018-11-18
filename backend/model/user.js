const mongoose = require('mongoose');
const  Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

mongoose.connect('mongodb://student:qwerty1@ds153422.mlab.com:53422/testproject', {
    useNewUrlParser: true
});


let UserSchema =new Schema({
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
    }
});

UserSchema.pre('save', function(next) {
   let user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            console.log(user.password);
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
let User = mongoose.model('User', UserSchema);
module.exports = User;
