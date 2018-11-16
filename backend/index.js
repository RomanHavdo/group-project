const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const route = require('./route/routes');


const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/api', route);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', route);

app.listen(PORT, () => {
    console.log(`Server stardet at port ${PORT}`);
});