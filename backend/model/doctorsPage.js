const mongoose = require('mongoose');

const doctorsPageSchema = mongoose.Schema({
    items: Array,
}, {
    collection: 'doctorsPage',
    versionKey: false
});

const doctorsPage = module.exports = mongoose.model('doctorsPage', doctorsPageSchema);