var User = require('./../models/User');
var jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

//var Transaction = require('./../models/Transaction');
//var jwt = require('jsonwebtoken');
//const jwtSecret = require('./../../config/config').secret;
//const sms = require("./../service/sms");
//var braintree = require("braintree");
//var Promises = require("bluebird");
//var fx = require('money');

module.exports = {
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
        if (!req.body.email || typeof req.body.email !== 'string') {
            return res.status(400).json({
                status: 400,
                error: 'email field is required and type string'
            });
        }
        if (!req.body.password || typeof req.body.password !== 'string') {
            return res.status(400).json({
                status: 400,
                result: 'password field is required and type string'
            });
        }

        User.findOne(
            {where: {email: req.body.email}}
        ).then(user => {
                if (!user || !user.comparePasswordSync(req.body.password)) {
                    return res.status(404).json({
                        status: 404,
                        result: 'email or password incorrect'
                    });
                }
                var token = jwt.sign({uid: user.id}, jwtSecret, {
                    expiresIn: 60 * 60 * 24 // expires in 24 hours
                });
                res.status(200).json({
                    token: token
                })
            }).catch(err => {
                res.json(err);
            })
    }
};