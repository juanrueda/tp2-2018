const express = require('express');
const {Juego,Equipo} = require('./sequelize');
  

const app = express();

app.get('/juegos', (req, res, next) => {
    Juego.findAll().then(juegos => res.json(juegos))
});
app.get('/equipos', (req, res, next) => {
    Equipo.findAll().then(equipos => res.json(equipos))
});

const port = 3000;
app.listen(port, () => {
console.log(`Runing on http://localhost:${port}`);
});