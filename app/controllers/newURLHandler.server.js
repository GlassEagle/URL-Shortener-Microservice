'use strict';

var ShortURLs = require("../models/shortURLs.js");

function newURLHandler (req, res) {
	
	var shortURL = new  ShortURLs({original_url: req.params[0]});
	
	shortURL.save(function(err, product){
		if(err)
			return res.json({"error: ": err.toString()});
		
		res.json(product);
	});
}

module.exports = newURLHandler;