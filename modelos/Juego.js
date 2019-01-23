module.exports = (sequelize, type) => {
    return sequelize.define('juegos', {
        id_juego: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
       
        hora_inicio: type.DATE,
        hora_fin: type.DATE,
        
    }, {
        timestamps: false
    });
}