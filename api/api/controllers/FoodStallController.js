var FoodStall = require('./../models/FoodStall');

module.exports = {
    getFoodStallList: function (req, res) {
        FoodStall.findAll({where: { foodCenterId: req.params.foodCenterId}})
        .then(user => {
                res.json(200, user);
            })
    },
    getFoodStall: function (req, res) {
        FoodStall.find({where: { foodCenterId: req.params.foodCenterId, id: req.params.foodStallId}})
        .then(user => {
                res.json(200, user);
            })
    }
};