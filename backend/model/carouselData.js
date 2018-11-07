const mongoose = require('mongoose');
const carouselDataSchema = mongoose.Schema({
    carouselItems: Array
}, {
    collection: 'carouselData',
    versionKey: false
});

const carouselData = module.exports = mongoose.model('carouselData', carouselDataSchema);