const mongoose = require('mongoose');
const servicesDataSchema = mongoose.Schema({
    servicesItems: Array
}, {
    collection: 'servicesData',
    versionKey: false
});

const servicesData = module.exports = mongoose.model('servicesData', servicesDataSchema);