var Sequelize = require('sequelize');
var sequelize = require("./../../config/database");
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

const attributes = {
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
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
};
const hooks = {
    hooks: {
        beforeValidate: function (user) {
            if (user.password)
                user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null);
        }
    }

};
const options = {
    classMethods: {
        toJSON: function () {
            var values = Object.assign({}, this.get());

            delete values.password;
            return values;
        },
        getFullName: function() {
            return [this.firstName, this.lastName].join(' ');
        },
        comparePassword: function (candidatePassword, cb) {
            bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
                if (err) return cb(err);
                cb(null, isMatch);
            });
        },
        comparePasswordSync: function (password) {
                    return bcrypt.compareSync(password, this.password);
                }
    }
};
const User = sequelize.define('user',
    attributes,
    hooks
);
User.prototype.toJSON = options.classMethods.toJSON;
User.prototype.getFullName = options.classMethods.getFullName;
User.prototype.comparePassword = options.classMethods.comparePassword;
User.prototype.comparePasswordSync = options.classMethods.comparePasswordSync;

User.total = function(){
    return 1
};
User.sync({force: true}).then(() => {
    // Table created

    return User.create({
        email: 'user@halalonclick.com',
        firstName: 'Mahfuzur',
        lastName: 'Rahman',
        password: 'user'
    });
});
module.exports = User;