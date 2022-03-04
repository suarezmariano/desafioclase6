const express = require('express');
const app = express();

const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('./productos.txt');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server corriendo en el puerto: ' + port);
});

app.get('/', (req, res) => {
  res.send(
    `<h1>Bienvenidos, haga click <a href="/productos">aca</a> para ver todos los productos o <a href="/productoRamdom">aca</a> para ver un producto al azar. Gracias.</h1>`
  );
});

app.get('/productos', (req, res) => {
  const productos = contenedor.getAll();
  res.send(productos);
});

app.get('/productoRamdom', (req, res) => {
  const getRamdom = contenedor.getRamdom();
  res.send(getRamdom);
});
