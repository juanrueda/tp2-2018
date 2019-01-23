const Sequelize = require('sequelize');
const JuegosModel = require('./modelos/Juego');

const sequelize = new Sequelize('tp2_ttads', 'root', '39710975', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

const Juego = JuegosModel(sequelize, Sequelize);

Juego.sync()
    .then(() => {
        console.log('Db and tables created');
    });

module.exports = Juego;