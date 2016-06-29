'use strict';

var ShortURLs = require("../models/shortURLs.js");
var bling = require('bling-hashes');

function newURLHandler (req, res) {
	
	var url_id = djbHash(req.params[0]);
	
	ShortURLs.findOneAndUpdate(
		{short_url: url_id},
		{original_url: req.params[0], short_url: url_id},
		{"new": true, upsert: true, runValidators: true},
		function(err, doc){
			if (err)
				return res.json({"error": err.toString()});
				
			res.json(doc);
		}
	);
}

function djbHash(str){
	var hash = bling.djb(str); //djb hash
	var arr = [];
	var char;
	var q = hash;
	var r;
	
	//change the number djbHash to alphanumeric numbering (62 characers)
	while(q > 0){
		r = q%62; //remainder
		q = Math.floor(q/62); //quotient
		
		char = (r < 10) ? String.fromCharCode(48 + r) //char is 0-9
				: (r < 36) ? String.fromCharCode(55 + r) //char is A-Z
				: String.fromCharCode(61 + r); //char is a-z
				
		arr.unshift(char); //add char to the front
	}
	
	return arr.join(""); //join array of characters into a string
}

module.exports = newURLHandler;