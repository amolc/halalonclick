var Sequelize = require('sequelize');
var sequelize = require("./../../config/database");
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
const User = sequelize.define('user', {
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        encryptedPassword: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        verificationCode: {
            type: Sequelize.STRING
        }
    },
    {
        instanceMethods: {
            toJSON: function () {
                var values = Object.assign({}, this.get());

                delete values.encryptedPassword;
                return values;
            }
        }
    });
User.sync({force: true}).then(() => {
    // Table created

    return User.create({
        email: 'nusratjahantamanna@80startups.com',
        firstName: 'Nusrat Jahan',
        lastName: 'Tamanna'
    });
});
module.exports = User;