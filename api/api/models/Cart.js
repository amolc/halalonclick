var Sequelize = require('sequelize');
var sequelize = require("./../../config/database");

const Cart = sequelize.define('cart', {
    userId: {
        type: Sequelize.INTEGER
    },
    foodCenterId: {
        type: Sequelize.INTEGER
    },
    foodStallId: {
        type: Sequelize.INTEGER
    },
    menuId: {
        type: Sequelize.INTEGER
    },
    totalOrder: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    }
});

// force: true will drop the table if it already exists
Cart.sync({force: true}).then(() => {


});
module.exports = Cart;