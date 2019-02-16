const express = require('express');
const {Juego,Equipo,TipoEvento,Evento} = require('./sequelize');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/juegos', (req, res, next) => {
    Juego.findAll().then(juegos => res.json(juegos))
});
app.post('/juegos/modificar', (req, res,next ) => {
    Juego.update({
        hora_inicio : req.body.hora_inicio,
        hora_fin : req.body.hora_fin   
    },
    {where : {
        id_juego : req.body.id_juego
    }

    }).then(juego => res.json(juego))
});

app.post('/juegos/nuevo', (req, res, next) => {

    var juego = {
        hora_inicio : req.body.hora_inicio,
        hora_fin : req.body.hora_fin
    }  
    Juego.create(juego);
    res.send(juego);
});

app.get('/equipos', (req, res, next) => {
    Equipo.findAll().then(equipos => res.json(equipos))
});

// app.post('/equipos', (req, res, next) => {
//     Equipo.findAll({ where: { nombre_equipo : req.body.nombre_equipo }})
//         .then(equipos => res.json(equipos))
// });

app.get('/equipos/:nombre', (req, res, next) => {
    Equipo.findOne({ where: { nombre_equipo : req.params.nombre }})
        .then(equipo => res.json(equipo))
});

app.post('/equipos/modificar', (req, res, next) => {    
    Equipo.update({
        nombre_equipo : req.body.nombre_equipo
    },
    {
        where : {
            id_equipo : req.body.id_equipo
        }
    }).then(equipo => res.json(equipo));
});

app.post('/equipos/eliminar', (req, res, next) => {
    Equipo.destroy({
        where : {
            id_equipo : req.body.id_equipo
        }
    }).then((deletedRecord) => {
        if(deletedRecord === 1){
            res.status(200).json({message:"Deleted successfully"});          
        }
        else
        {
            res.status(404).json({message:"record not found"})
        }
    })
});

app.post('/equipos/nuevo', (req, res, next) => {

    var equipo = {
        nombre_equipo : req.body.nombre_equipo
    }  
    Equipo.create(equipo);
    res.send(equipo);
});



app.get('/tiposEventos', (req, res, next) => {
    TipoEvento.findAll().then(tiposEventos => res.json(tiposEventos))
});

app.get('/eventos', (req, res, next) =>{
    Evento.findAll().then(eventos => res.json(eventos))
});

app.post('/eventos/nuevo', (req, res, next) => {

    var evento = {
        hora_evento : req.body.hora_evento,
        id_tipo_evento : req.body.id_tipo_evento,
        id_juego : req.body.id_juego,
        id_equipo : req.body.id_equipo
    }  
    Evento.create(evento);
    res.send(evento);
});

app.post('/eventos/modificar', (req, res, next) => {    
    Evento.update({
        hora_evento : req.body.hora_evento,
        id_tipo_evento : req.body.id_tipo_evento,
        id_juego : req.body.id_juego,
        id_equipo : req.body.id_equipo
    },
    {
        where : {
            id_eventos : req.body.id_eventos
        }
    }).then(evento => res.json(evento));
});

app.post('/eventos/eliminar', (req, res, next) => {
    Evento.destroy({
        where : {
            id_eventos : req.body.id_eventos
        }
    }).then((deletedRecord) => {
        if(deletedRecord === 1){
            res.status(200).json({message:"Deleted successfully"});          
        }
        else
        {
            res.status(404).json({message:"record not found"})
        }
    })
});

const port = 3000;
app.listen(port, () => {
console.log(`Runing on http://localhost:${port}`);
});