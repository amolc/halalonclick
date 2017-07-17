var http = require('http');
var db = require('./database');
var md5 = require('md5');
var CRUD = require('mysql-crud');
var accountdetailsCRUD = CRUD(db, 'tbl_accounts_detail');
//var env = require('./env');



exports.userlogin = function(req, res) {
    var username = req.body.username;
    var password = md5(req.body.password);

    var query = "SELECT * FROM tbl_account_detail WHERE username = '"+username+"' AND password = '"+password+"'";

    db.query(query, function(err, rows) {

        if (rows.length > 0) 
        {

            resdata.data = rows;
            resdata.status = true;
            resdata.message = 'successfully login welcome';

            res.jsonp(resdata);

        }
        else
        {

            resdata.status = false;
            resdata.message = 'Wrong username or password';

            res.jsonp(resdata);

        }

    });

   
}

exports.userreg = function(req, res) {


    var password = md5(req.body.password);

    accountdetailsCRUD.create({

        'username': req.body.username,
        'password': password,
        'email': req.body.email,
        'fname': req.body.fname,
        'lname': req.body.lname,
        'contact': req.body.contact,
        'address': req.body.address

    }, function(err, val) {

        if (!err) 
        {
            
            var resdata = {
                status: true,
                message: 'Successfuly Registered'
            };

            res.jsonp(resdata);
            

        } 
        else 
        {

            var resdata = {
                status: false,
                message: 'Failure'
            };
            res.jsonp(resdata);
            
            res.jsonp(resdata);
            
        }
        

    });

   


   
}