const Sequelize = require('sequelize');
const JuegosModel = require('./modelos/Juego');
const EquiposModel = require('./modelos/Equipo');
const TiposEventosModel = require('./modelos/TipoEvento');
const EventosModel = require('./modelos/Evento');
const JuegosEquiposModel = require('./modelos/JuegosEquipos');



const Conexion = require('./conexion');

const Juego = JuegosModel(Conexion, Sequelize);
const Equipo = EquiposModel(Conexion, Sequelize);
const TipoEvento = TiposEventosModel(Conexion, Sequelize);
const Evento = EventosModel(Conexion, Sequelize);
const JuegosEquipos = JuegosEquiposModel (Conexion, Sequelize);
const JuegoEvento = Conexion.define('juego_evento',{});


Juego.belongsToMany(Evento,{through:JuegoEvento,unique:false})
Evento.belongsToMany(Juego,{through:JuegoEvento,unique:false})



Conexion.sync()
    .then(() => {
        console.log('Db and tables created');
    });
    
module.exports = {Juego,Equipo,TipoEvento,Evento,JuegosEquipos}
    

