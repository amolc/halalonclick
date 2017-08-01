var Sequelize = require('sequelize');
var sequelize = require("./../../config/database");

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
        type: Sequelize.INTEGER
    }
});

// force: true will drop the table if it already exists
Menu.sync({force: true}).then(() => {


    var menuList = [{ name: 'Pokémon Yellow', price: 5.20},
    { name: 'Super Metroid', price: 5.20},
    { name: 'Mega Man X', price: 5.20},
    { name: 'Pac-Man', price: 5.20},
    { name: 'Super Mario World', price: 5.20},
    { name: 'Street Fighter II', price: 5.20},
    { name: 'Half Life', price: 5.20},
    { name: 'Final Fantasy VII', price: 5.20},
    { name: 'Star Fox', price: 5.20},
    { name: 'Tetris', price: 5.20},
    { name: 'Donkey Kong III', price: 5.20}];
    for(var i=1;i<= 10;i++){
        menuList.forEach(data => {
            Menu.create({
                foodStallId: i,
                name: data.name + " st "+i,
                price: data.price
            });
        })
    }

});
module.exports = Menu;