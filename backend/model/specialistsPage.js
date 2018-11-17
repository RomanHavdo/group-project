const mongoose = require('mongoose');

const specialistsPageSchema = mongoose.Schema({
    items: Array,
}, {
    collection: 'specialistsPage',
    versionKey: false
});

const specialistsPage = module.exports = mongoose.model('specialistsPage', specialistsPageSchema);