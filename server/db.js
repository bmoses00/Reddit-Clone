const mongoose = require('mongoose');

const MONGO_USERNAME = 'brian';
const MONGO_PASSWORD = 'radio-on';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'reddit-test';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

module.exports = mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology: true});
