const fs = require('fs');

class Contenedor {
  constructor(archivo) {
    this.archivo = archivo;
  }

  async getAll() {
    try {
      const contenido = fs.readFileSync(this.archivo);
      return JSON.parse(contenido);
    } catch (error) {
      console.log('No se pudo leer el archivo');
    }
  }

  async getRamdom() {
    try {
      const productos = fs.readFileSync(this.archivo);
      const productosParsed = JSON.parse(productos);
      const ramdom = Math.floor(
        Math.random() * (productosParsed.length - 1) + 1
      );
      console.log(ramdom);
      return productosParsed[ramdom - 1];
    } catch (err) {
      console.log('Error: ' + err);
    }
  }
}

module.exports = Contenedor;
