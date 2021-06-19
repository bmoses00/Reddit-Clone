const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const cors = require('cors');

app.use(cors());

const postAPI = require('./api/post.js');
app.use('/api', postAPI)

const root = '/home/brian/Documents/webdev/react_webpack_starter'
const port = 3000;

// app.get('/', (req, res) => {
//     res.sendFile('/client/dist/index.html', {root: root});

// });
app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});