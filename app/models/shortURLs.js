'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shortURL = new Schema({
    original_url: String,
    short_url: Number
});

module.exports = mongoose.model('ShortURL', shortURL);
