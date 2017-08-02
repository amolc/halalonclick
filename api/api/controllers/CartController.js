var Cart = require('./../models/Cart');

module.exports = {
    getCart: function (req, res) {
        Cart.find({where: { userId: req.body.userId}})
        .then(data => {
                res.status(200).json(data);
            })
    },
    setCart: function (req, res) {
        Cart.find({where: { userId: req.body.userId}})
            .then(data => {
                res.status(200).json(data);
            })
    }
};