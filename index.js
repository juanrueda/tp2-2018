const express = require('express');
const {Juego,Equipo,TipoEvento} = require('./sequelize');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/juegos', (req, res, next) => {
    Juego.findAll().then(juegos => res.json(juegos))
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

const port = 3000;
app.listen(port, () => {
console.log(`Runing on http://localhost:${port}`);
});