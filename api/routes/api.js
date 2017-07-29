var express = require('express');
var router = express.Router();
var authController = require('./../api/controllers/AuthController');
var userController = require('./../api/controllers/UserController');
var tokenParse = require('./../api/middleware/tokenParse');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', authController.signup);
router.post('/authenticate', authController.authenticate);
router.get('/profile', tokenParse, userController.getProfile);

module.exports = router;
