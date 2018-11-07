const mongoose = require('mongoose');

const cardItemsSchema = mongoose.Schema({
    gridItems: Array
}, {
    collection: 'cardItems',
    versionKey: false
});

const cardItem = module.exports = mongoose.model('cardItem', cardItemsSchema);