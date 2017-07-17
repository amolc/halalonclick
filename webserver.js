var connect = require('connect');
var app = connect();
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

var mobile = connect();


app = require('./api/api');
var http = require("http").createServer(app);

mobile.use(serveStatic('mobile/www'));

app.use('/mobile/www',mobile);

app.use(vhost('mobile.localhost', mobile));


http.listen(7575);
io.attach(http);
console.log("Magic at 7575");
