var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", "false");
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


var accounts = require('./accounts');
var customerwebsite = require('./customer_website.js');

app.use('/mobile', express.static(path.join(__dirname, 'mobile')));


app.post('/api/login', accounts.userlogin);
app.post('/api/registration', accounts.userreg);


module.exports = app;
