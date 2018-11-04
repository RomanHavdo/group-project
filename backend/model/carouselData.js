const mongoose = require('mongoose');
const carouselData = mongoose.Schema({
    imgUrl:{
        type:String,
        required:true
    },
    link:{
        type:Object,
        required:true
    },
    subscribe:{
        type:String,
        required:true
    }
    
},{ collection : 'carouselData' });


const carouselsData = module.exports = mongoose.model('carouselData', carouselData);