var Sequelize = require('sequelize');
var sequelize = require("./../../config/database");
var FoodCenter = require('./FoodCenter');
//var Menu = require('./Menu');

const FoodStall = sequelize.define('food_stall', {
    name: {
        type: Sequelize.STRING
    },
    foodType: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    rating: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    hours: {
        type: Sequelize.STRING
    },
    foodCenterId: {
        type: Sequelize.INTEGER
    }
});

// force: true will drop the table if it already exists
FoodStall.sync({force: true}).then(() => {
    FoodStall.create({
        id: 1,
        name: 'Rice Stall 1 fc1',
        foodType: 'type rice',
        imageUrl: '/images/food-stall/food-rice.png',
        rating: '4.5',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)',
        foodCenterId: 1
    });
    FoodStall.create({
        id: 2,
        name: 'Rice Stall 2 fc1',
        foodType: 'type rice',
        imageUrl: '/images/food-stall/food-rice.png',
        rating: '4.5',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)',
        foodCenterId: 1
    });
    FoodStall.create({
        id: 3,
        name: 'Rice Stall 3 fc1',
        foodType: 'type rice',
        imageUrl: '/images/food-stall/food-rice.png',
        rating: '4.5',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)',
        foodCenterId: 1
    });
    FoodStall.create({
        id: 4,
        name: 'Salad Stall 1 fc1',
        foodType: 'type rice',
        imageUrl: '/images/food-stall/food-salad.png',
        rating: '4.5',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)',
        foodCenterId: 1
    });
    FoodStall.create({
        id: 5,
        name: 'Salad Stall 2 fc1',
        foodType: 'type rice',
        imageUrl: '/images/food-stall/food-salad.png',
        rating: '4.5',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)',
        foodCenterId: 1
    });
    FoodStall.create({
        id: 6,
        name: 'Rice Stall 1 fc2',
        foodType: 'type rice',
        imageUrl: '/images/food-stall/food-rice.png',
        rating: '4.5',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)',
        foodCenterId: 2
    });
    FoodStall.create({
        id: 7,
        name: 'Rice Stall 2 fc2',
        foodType: 'type rice',
        imageUrl: '/images/food-stall/food-rice.png',
        rating: '4.5',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)',
        foodCenterId: 2
    });
    FoodStall.create({
        id: 8,
        name: 'Rice Stall 3 fc2',
        foodType: 'type rice',
        imageUrl: '/images/food-stall/food-rice.png',
        rating: '4.5',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)',
        foodCenterId: 2
    });
    FoodStall.create({
        id: 9,
        name: 'Salad Stall 1 fc2',
        foodType: 'type rice',
        imageUrl: '/images/food-stall/food-salad.png',
        rating: '4.5',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)',
        foodCenterId: 2
    });
    FoodStall.create({
        id: 10,
        name: 'Salad Stall 2 fc3',
        foodType: 'type rice',
        imageUrl: '/images/food-stall/food-salad.png',
        rating: '4.5',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)',
        foodCenterId: 3
    });

});
module.exports = FoodStall;