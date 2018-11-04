const express = require('express');
const router = express.Router();


const menuItem = require('../model/menuItem');
const cardItem = require('../model/cardItem');
const carouselData = require('../model/carouselData');

// router.route('/')
//     .get((req, res) => {
//         res.sendFile(path.join(__dirname, 'public/index.html'))
//     })

// router.route('/*')
//     .get((req, res) => {
//         res.status(404).send('Page does not exist. yet...')
//     });

    router.route('/menu_items')
    .get((req, res) => {
        menuItem.find((err, items) => {
            if(err){
                res.status(404).json(err);
            }
            else{
                res.status(200).json(items);
            }
        })
    });
    
    router.route('/card_items')
    .get((req, res) => {
        cardItem.find((err, items) => {
            if(err){
                res.status(404).json(err);
            }
            else{
                res.status(200).json(items);
            }
        })
    });
    
    
    router.route('/carousel_data')
    .get((req, res) => {
        carouselData.find((err, items) => {
            if(err){
                res.status(404).json(err);
            }
            else{
                res.status(200).json(items);
            }
        })
    });   

module.exports = router;