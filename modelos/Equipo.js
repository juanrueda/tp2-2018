module.exports = (sequelize, type) => {
    return sequelize.define('equipos', {
        id_equipo: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
       
        nombre_equipo: type.STRING        
        
    }, {
        timestamps: false
    });
}