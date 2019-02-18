module.exports = (sequelize, type)=>{
    return sequelize.define('juegos_equipos',{
        id_juego: {
            type : type.INTEGER,
            primaryKey: true
        },
        id_equipo: {
            type : type.INTEGER,
            primaryKey: true
        },
        
    },{
        timestamps: false
    });
}

