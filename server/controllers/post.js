const { Post } = require('../models/Post.js');

exports.getPosts = () => Post.find();