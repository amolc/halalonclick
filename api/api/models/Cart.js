var Sequelize = require('sequelize');
var sequelize = require("./../../config/database");

const Cart = sequelize.define('cart', {
    userId: {
        type: Sequelize.STRING
    },
    cartInfo: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
Cart.sync({force: true}).then(() => {


});
module.exports = Cart;