const express = require('express');
const router = express.Router();
const { getOneHello } = require('../controllers/hello')

router.get('/hello', (req, res) => {
    getOneHello()
        .then((result) => {
            res.send(result[0]);
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;