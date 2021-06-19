const express = require('express');
const router = express.Router();
const { getPosts } = require('../controllers/post')

router.get('/posts', (req, res) => {
    getPosts()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;