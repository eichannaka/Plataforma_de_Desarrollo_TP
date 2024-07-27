  const express = require('express');
const bodyParser = require('body-parser');

//Conexion a la base de datos
const connection = require('./db')

//Cors
const cors = require('cors');

const app = express();
const port = 8888;

//Cors para permitir que nuestra API sea usada por otra APP.
app.options('*', cors());
app.use((req, res, next) => {
  //cambiar la URL por la APP que la consume.
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Iniciamos el servidor.
app.listen(port, () => {
    console.log('Servidor iniciado en: http://localhost:' + port);
});

//Importar rutas
app.use(require("./src/routes/userRoute"));
app.use(require("./src/routes/serviceRoute"));

// Middleware para manejar el error 404
app.use((req, res, next) => {
    res.status(404);
    res.send(`
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <a href="/">Volver a la página de inicio</a>
      `);
});