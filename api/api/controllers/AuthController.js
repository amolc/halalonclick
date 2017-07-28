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
            email: 'nusratjahantamann1a@80startups.com',
            firstName: 'Nusrat Jahan',
            lastName: 'Tamanna',
            password: 'limon'
        }).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        })
    },
    authenticate: function (req, res) {
        User.findOne(
            {where: {email: 'nusratjahantamanna@80startups.com'}}
        ).then(user => {
                res.json(user.comparePasswordSync('1234'))
                //user.comparePassword('1234', function (data, isMatch) {
                //    res.json(isMatch)
                //})
                //.then(data => {
                //        res.json(data)
                //    })

            })
    }
};