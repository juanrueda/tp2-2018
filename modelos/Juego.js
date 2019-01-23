module.exports = (sequelize, type) => {
    return sequelize.define('juegos', {
        id_juego: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: type.DATEONLY,
        hora_inicio: type.DATE,
        hora_fin: type.DATE,
        id_equipo1: type.INTEGER,
        id_equipo2: type.INTEGER
    }, {
        timestamps: false
    });
}