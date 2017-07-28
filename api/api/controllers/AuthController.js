var User = require('./../models/User');
//var Transaction = require('./../models/Transaction');
//var jwt = require('jsonwebtoken');
//const jwtSecret = require('./../../config/config').secret;
//const sms = require("./../service/sms");
//var braintree = require("braintree");
//var Promises = require("bluebird");
//var fx = require('money');

module.exports = {
    ping: function (req, res) {
        User.findOne().then(user => {
            res.json(user);
        });
    },

    signup: function (req, res) {
        User.create({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        }).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        })
    },
    authenticate: function (req, res) {
        User.findOne(
            {where: {email: req.body.email}}
        ).then(user => {
                res.json(user.comparePasswordSync(req.body.password))
            }).catch(err => {
                res.json(err);
            })
    }
};