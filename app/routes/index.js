'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');
var newURLHandler = require(path + '/app/controllers/newURLHandler.server.js');

module.exports = function (app) {

	var clickHandler = new ClickHandler();

	app.route('/new/*')
		.get(newURLHandler);

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	
};
