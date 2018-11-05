const mongoose = require('mongoose');
const cardItems = mongoose.Schema({
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
    
},{ collection : 'cardItems' });


const cardItem = module.exports = mongoose.model('cardItem', cardItems);