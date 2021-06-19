const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const helloSchema = new Schema({
    text: { 
        type: String,
        required: true
    }
});

const Hello = mongoose.model('Hello', helloSchema);

module.exports = Hello;