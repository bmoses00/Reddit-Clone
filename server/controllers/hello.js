const Hello = require('../models/Hello.js');

exports.createHello = (body) => new Hello(body).save();

exports.getOneHello = () => Hello.find();
