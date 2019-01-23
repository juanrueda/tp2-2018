const express = require('express');
const Juego = require('./sequelize');

const app = express();

app.get('/juegos', (req, res, next) => {
    Juego.findAll().then(juegos => res.json(juegos))
});

const port = 3000;
app.listen(port, () => {
console.log(`Runing on http://localhost:${port}`);
});