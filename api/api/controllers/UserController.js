var User = require('./../models/User');

module.exports = {
    getProfile: function (req, res) {
        User.findOne({where: { id: req.uid}})
        .then(user => {
                res.json(200, user);
            })
    }
};