const Sequelize = require('sequelize');

const conexion = new Sequelize('tp2_ttads', 'root', '39710975', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

module.exports = conexion;