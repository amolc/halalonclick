var Menu = require('./../models/Menu');

module.exports = {
    getMenuList: function (req, res) {
        Menu.findAll({where: { foodStallId: req.params.foodStallId}})
        .then(data => {
                res.json(200, data);
            })
    },
    getMenu: function (req, res) {
        Menu.findAll({where: { foodStallId: req.params.foodStallId, id: req.params.menuId}})
        .then(data => {
                res.json(200, data);
            })
    }
};