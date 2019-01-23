module.exports = (sequelize, type) => {
    return sequelize.define('tipos_eventos',{
        id_tipos_eventos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nombre_evento: type.STRING

    }, {
        timestamps: false
        
    });
}