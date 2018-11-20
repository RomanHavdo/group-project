const mongoose = require('mongoose');

const newsPageSchema = mongoose.Schema({
    items: Array,
}, {
    collection: 'newsPage',
    versionKey: false
});

const newsPage = module.exports = mongoose.model('newsPage', newsPageSchema);