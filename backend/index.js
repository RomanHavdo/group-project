const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const route = require('./route/routes');

mongoose.connect('mongodb://student:qwerty1@ds153422.mlab.com:53422/testproject', {
    useNewUrlParser: true
});
const PORT = process.env.PORT || 8080;

//===========================================Add data to Momgoose db=============

// const newsList = require('./model/news');


// let items = new newsList ({
//     news: [
//     ]
//   });

//   doctorsList.find((err, res) => {
//     console.log(res);
// })

// newsList.deleteMany( err => {
//     if(err) throw err;
//     console.log('Deleted');
// })

// items.save( err => {
//     if(err) throw err;
//     console.log('Saved!');
// })
//============================================

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/api', route);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen(PORT, () => {
    console.log(`Server stardet at port ${PORT}`);
});