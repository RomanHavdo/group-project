const express = require('express');
const router = express.Router();

const dataFromDb = require('../model/shoppingItem');

router.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'))
    })

router.route('/*')
    .get((req, res) => {
        res.status(404).send('Page does not exist. yet...')
    })

module.exports = router;