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
  }
};