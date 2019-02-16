module.exports = (sequelize, type) => {
    return sequelize.define('eventos', {
        id_eventos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
       
        hora_evento: type.DATE,
        id_tipo_evento: {
            type: type.INTEGER,
            references: {
               model: 'tipos_eventos', 
               key: 'id_tipos_evento', 
            }
         },
         id_juego: {
            type: type.INTEGER,
            references: {
               model: 'juegos', 
               key: 'id_juego', 
            }
         },
         id_equipo: {
            type: type.INTEGER,
            references: {
               model: 'equipos', 
               key: 'id_equipo', 
            }
         }
        
    }, {
        timestamps: false
    });
}


