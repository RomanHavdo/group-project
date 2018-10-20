const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const route = require('./route/routes');

mongoose.connect('mongodb://student:qwerty1@ds153422.mlab.com:53422/testproject', { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected at port 27017');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/api', route);
app.use(express.static(path.join(__dirname, 'public')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.get('/', (req, res) => {
    res.send('foobar176');
})

app.listen(PORT, () => {
    console.log(`Server stardet at port ${PORT}`);
});