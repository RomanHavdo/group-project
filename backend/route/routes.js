const express = require('express');
const router = express.Router();

const User = require('../model/user');
const menuItem = require('../model/menuItem');
const cardItem = require('../model/cardItem');
const carouselData = require('../model/carouselData');

// router.route('/')
//     .get((req, res) => {
//         res.sendFile(path.join(__dirname, 'public/index.html'))
//     })

router.route('/api/menu_items')
    .get((req, res) => {
        menuItem.find((err, items) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json(items);
            }
        })
    });

router.route('/api/card_items')
    .get((req, res) => {
        cardItem.find((err, items) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json(items);
            }
        })
    });

router.route('/api/carousel_data')
    .get((req, res) => {
        carouselData.find((err, items) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json(items);
            }
        })
    });

router.route('/user')
    .get((req, res) => {
        User.find((err, items) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json(items);
            }
        })
    });

router.route('/user')
    .post((req, res) => {
       let user = new User(req.body);
       console.log(user);
        user.save(function (err, userTest, affected) {
            if (err) throw err;
        });

    });

module.exports = router;