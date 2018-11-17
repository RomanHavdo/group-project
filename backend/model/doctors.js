const mongoose = require('mongoose');

const doctorsListSchema = mongoose.Schema({
    doctors: Array
}, {
    collection: 'doctorsList',
    versionKey: false
});

const doctorsList = module.exports = mongoose.model('doctorsList', doctorsListSchema);