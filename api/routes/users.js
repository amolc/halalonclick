var express = require('express');
var router = express.Router();
var authController = require('./../api/controllers/AuthController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/ping', authController.ping);

module.exports = router;
