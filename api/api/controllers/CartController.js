var Cart = require('./../models/Cart');

module.exports = {
    getCart: function (req, res) {
        //Cart.findAll({where: {userId: req.uid}})
        Cart.findAll()
            .then(data => {
                res.status(200).json(data);
            })
    },

    addToCart: function (req, res) {
        var cartObj = {
            userId: req.body.userId,
            name:req.body.name,
            price:req.body.price,
            foodCenterId: req.body.foodCenterId,
            foodStallId: req.body.foodStallId,
            menuId: req.body.menuId,
            totalOrder: req.body.totalOrder,
            cartInfo: req.body.cartInfo
        };
        Cart.create(cartObj)
            .then(data => {
                res.json(data);
            }).catch(err => {
                res.json(err);
            })

    },
    removeFromCart: function (req, res) {
        Cart.destroy({
            where: { id: req.query.order_id}
        })
            .then(data => {
                res.json(data);
            }).catch(err => {
                res.json(err);
            })

    }
};