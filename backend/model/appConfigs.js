const mongoose = require('mongoose');

const appConfigsSchema = mongoose.Schema({
    mainPage: Array,
}, {
    collection: 'appConfigs',
    versionKey: false
});

const appConfigs = module.exports = mongoose.model('appConfigs', appConfigsSchema);