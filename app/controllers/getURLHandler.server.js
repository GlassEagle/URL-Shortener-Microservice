'use strict';

var ShortURLs = require("../models/shortURLs.js");

function getURLHandler(req, res){
    
    ShortURLs.findOne({short_url: req.params.url_id}, function(err, shortURL){
        if(err){
            return res.json({error: err.toString()});
        }
        
        if(!shortURL){
            //no documents were found
            return res.json({error: "This url is not on the database."});
        }
        
        //redirect to original_url
        res.writeHead(307, {Location: shortURL.original_url});
        res.end();
    });
}

module.exports = getURLHandler;