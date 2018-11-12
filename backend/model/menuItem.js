const mongoose = require('mongoose');

const menuItemsSchema = mongoose.Schema({
    logo: {
        type: String,
        required: true
    },
    clinicName: {
        type: String,
        required: true
    },
    main: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    services: {
        type: String,
        required: true
    },
    doctors: {
        type: String,
        required: true
    },
    news: {
        type: String,
        require: true
    },
    contacts: {
        type: String,
        required: true
    },
    logIn: {
        type: String,
        required: true
    },
    signIn: {
        type: String,
        required: true
    },
}, {
    collection: 'menuItems',
    versionKey: false
});

const menuItem = module.exports = mongoose.model('menuItem', menuItemsSchema);