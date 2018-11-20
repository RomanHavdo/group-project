const mongoose = require('mongoose');

const newsListSchema = mongoose.Schema({
    news: Array
}, {
    collection: 'newsList',
    versionKey: false
});

const newsList = module.exports = mongoose.model('newsList', newsListSchema);