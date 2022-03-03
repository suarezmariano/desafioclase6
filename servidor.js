const express = require('express');
const app = express();

//const Contenedor = require ("./Contenedor");
//const contenedor = new Contenedor("./productos.txt");

port = 8080;

const server = app.listen(port, () => {
  console.log('Server corriendo en el puerto: ' + port);
});

app.get('/', async (req, res) => {
  //const productos = await contenedor.getAll();
  res.json(productos);
});

app.get('/productoRamdom', async (req, res) => {
  // prodcutoRamdom = await contenedor.productoRamdom();
  // res.json(prodcutoRamdom);
});
