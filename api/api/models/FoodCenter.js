var Sequelize = require('sequelize');
var sequelize = require("./../../config/database");
const FoodCenter = sequelize.define('food_center', {
    name: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    hours: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
FoodCenter.sync({force: true}).then(() => {
    FoodCenter.create({
        id: 1,
        name: 'Aiman Cafe',
        imageUrl: '/images/food-center/fc-aiman-cafe.png',
        type: 'halal',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)'
    });
    FoodCenter.create({
        id: 2,
        name: 'Orang Orang',
        imageUrl: '/images/food-center/fc-orange.png',
        type: 'halal',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)'
    });
    FoodCenter.create({
        id: 3,
        name: 'Tong',
        imageUrl: '/images/food-center/fc-tong.png',
        type: 'halal',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)'
    });
    FoodCenter.create({
        id: 4,
        name: 'Orang Orang Fresh',
        imageUrl: '/images/food-center/fc-orange.png',
        type: 'fresh',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)'
    });
    FoodCenter.create({
        id: 5,
        name: 'Tong Fresh',
        imageUrl: '/images/food-center/fc-tong.png',
        type: 'fresh',
        address: '235, Jurong East St 21, Singapore 600235',
        hours: '4"00PM - 9"00PM (Last Order At 8"30PM)'
    });
});
module.exports = FoodCenter;