var express = require('express');
var router = express.Router();
var authController = require('./../api/controllers/AuthController');
var userController = require('./../api/controllers/UserController');
var foodCenterController = require('./../api/controllers/FoodCenterController');
var foodStallController = require('./../api/controllers/FoodStallController');
var tokenParse = require('./../api/middleware/tokenParse');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', authController.signup);
router.post('/authenticate', authController.authenticate);
router.get('/profile', tokenParse, userController.getProfile);

router.get('/food-center', foodCenterController.getAll);
router.get('/food-center/:type', foodCenterController.getAllByType);
router.get('/food-center/:foodCenterId', foodCenterController.getOne);

router.get('/food-stall/:foodCenterId/details/:foodStallId', foodStallController.getFoodStall);
router.get('/food-stall/:foodCenterId', foodStallController.getFoodStallList);
module.exports = router;
