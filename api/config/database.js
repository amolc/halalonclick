var Sequelize = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

