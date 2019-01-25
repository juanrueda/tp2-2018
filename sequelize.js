const Sequelize = require('sequelize');
const JuegosModel = require('./modelos/Juego');
const EquiposModel = require('./modelos/Equipo');
const TiposEventosModel = require('./modelos/TipoEvento');
const Conexion = require('./conexion');

const Juego = JuegosModel(Conexion, Sequelize);
const Equipo = EquiposModel(Conexion, Sequelize);
const TipoEvento = TiposEventosModel(Conexion, Sequelize);

Conexion.sync()
    .then(() => {
        console.log('Db and tables created');
    });
    
module.exports = {Juego,Equipo,TipoEvento}
    

