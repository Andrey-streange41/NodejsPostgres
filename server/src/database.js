const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'online_store',
    'postgres',
    '0976196890',
    {
        dialect:'postgres',
        host:process.env.DB_HOST,
        port:process.env.DB_PORT
    }
);