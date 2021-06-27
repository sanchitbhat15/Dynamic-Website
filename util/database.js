const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Samsung007@',{
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;
