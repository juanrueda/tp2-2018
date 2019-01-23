const Sequelize = require('sequelize');
const JuegosModel = require('./modelos/Juego');
const EquiposModel = require('./modelos/Equipo');
const TiposEventosModel = require('./modelos/TipoEvento');

const sequelize = new Sequelize('tp2_ttads', 'root', 'root', {
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
const Equipo = EquiposModel(sequelize, Sequelize);
const TipoEvento = TiposEventosModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('Db and tables created');
    });
    
    module.exports = {Juego,Equipo,TipoEvento}
    

