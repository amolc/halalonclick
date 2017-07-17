var mysql = require('mysql');
var env = 'prod';

	var connection = mysql.createPool({
		database : 'halalonclick',
	    user : 'halalonclick',
		password : 'pass12345',
	    host :'halalonclick.sg',
	});
	
	module.exports = connection;

