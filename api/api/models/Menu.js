var Sequelize = require('sequelize');
var sequelize = require("./../../config/database");
var FoodStall = require('./FoodStall');

const Menu = sequelize.define('menu', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    foodStallId: {
        type: Sequelize.NUMBER
    }
});

// force: true will drop the table if it already exists
Menu.sync({force: true}).then(() => {


});
module.exports = Menu;