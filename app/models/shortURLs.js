'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var url = require('url');

var shortURL = new Schema({
    original_url: {type: String, validate: [validateOriginalURL, "Wrong url format, make sure you have a valid protocol and real site."]},
    short_url: Number
});

function validateOriginalURL(val){
    //url format good if hostname is defined
    return url.parse(val).hostname;
}

module.exports = mongoose.model('ShortURL', shortURL);
