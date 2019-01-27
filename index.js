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
app.get('/tiposEventos', (req, res, next) => {
    TipoEvento.findAll().then(tiposEventos => res.json(tiposEventos))
});

app.post('/equipos', (req, res) => {

    var equipo = {
        nombre_equipo : req.body.nombre_equipo
    }  
    Equipo.create(equipo);
    res.send(equipo);
});

const port = 3000;
app.listen(port, () => {
console.log(`Runing on http://localhost:${port}`);
});