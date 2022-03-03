const express = require('express');
const app = express();

const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('./productos.txt');

port = 8080;

app.listen(port, () => {
  console.log('Server corriendo en el puerto: ' + port);
});

app.get('/', (req, res) => {
  const productos = contenedor.getAll();
  res.json(productos);
});

app.get('/productoRamdom', (req, res) => {
  // productoRamdom = contenedor.productoRamdom();
  // res.json(productoRamdom);
});
