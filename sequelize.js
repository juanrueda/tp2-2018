const Sequelize = require('sequelize');
const JuegosModel = require('./modelos/Juego');
const EquiposModel = require('./modelos/Equipo');
const TiposEventosModel = require('./modelos/TipoEvento');
const EventosModel = require('./modelos/Evento');
const Conexion = require('./conexion');

const Juego = JuegosModel(Conexion, Sequelize);
const Equipo = EquiposModel(Conexion, Sequelize);
const TipoEvento = TiposEventosModel(Conexion, Sequelize);
const Evento = EventosModel(Conexion, Sequelize);
const EventoEquipo = Conexion.define('evento_equipo',{});


Juego.hasMany(Evento,{foreignKey: 'id_juego', sourceKey: 'id_juego'})
Evento.belongsTo(Juego,{foreignKey: 'id_juego', sourceKey: 'id_juego'})

TipoEvento.hasMany(Evento, {foreignKey: 'id_tipo_evento', sourceKey: 'id_tipos_eventos'})
Evento.belongsTo(TipoEvento, {foreignKey: 'id_tipo_evento', targetKey: 'id_tipos_eventos'})

Equipo.hasMany(Evento,{foreignKey: 'id_equipo', sourceKey: 'id_equipo'})
Evento.belongsTo(Equipo,{foreignKey: 'id_equipo', targetKey: 'id_equipo'})

Conexion.sync()
    .then(() => {
        console.log('Db and tables created');
    });
    
module.exports = {Juego,Equipo,TipoEvento,Evento}
    

