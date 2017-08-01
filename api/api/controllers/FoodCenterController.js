var FoodCenter = require('./../models/FoodCenter');

module.exports = {
    getAll: function (req, res) {
        FoodCenter.findAll()
        .then(data => {
                res.json(200, data);
            }).catch(err => {
                res.json(err);
            })
    },
    getAllByType: function (req, res) {
        FoodCenter.findAll({where: {type: req.params.type}})
        .then(data => {
                res.json(200, data);
            }).catch(err => {
                res.json(err);
            })
    },
    getOne: function (req, res) {
        FoodCenter.findOne({where: { id: req.params.foodCenterId}})
        .then(data => {
                res.json(200, data);
            }).catch(err => {
                res.json(err);
            })
    }
};