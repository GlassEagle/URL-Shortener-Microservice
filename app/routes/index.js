'use strict';

var path = process.cwd();
var newURLHandler = require(path + '/app/controllers/newURLHandler.server.js');

module.exports = function (app) {

	app.route('/new/*')
		.get(newURLHandler);

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	
};
