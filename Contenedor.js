const fs = require('fs');

class Contenedor {
  constructor(archivo) {
    this.archivo = archivo;
  }

  async save(producto) {
    try {
      const datos = fs.readFileSync(this.archivo);
      const datosParsed = JSON.parse(datos);
      producto['id'] = datosParsed[datosParsed.length - 1].id + 1;
      fs.writeFileSync(
        `./${this.archivo}`,
        JSON.stringify([...datosParsed, producto], null, 2)
      );
      console.log('Producto Agregado');
    } catch (err) {
      fs.writeFileSync(
        `./${this.archivo}`,
        JSON.stringify([{ ...producto, id: 1 }])
      );
      console.log('Producto Agregado');
    }
  }

  getAll() {
    try {
      const contenido = fs.readFileSync(this.archivo);
      return JSON.parse(contenido);
    } catch (error) {
      console.log('No se pudo leer el archivo');
    }
  }

  getById(id) {
    try {
      const productos = fs.readFileSync(this.archivo);
      let productosParsed = JSON.parse(productos);
      return productosParsed.find((producto) => id === producto.id);
    } catch (err) {
      console.log('Error: ' + err);
    }
  }

  deleteAll() {
    fs.writeFileSync(this.archivo, '');
    return 'Archivo Borrado';
  }

  deleteByID(id) {
    try {
      const datos = fs.readFileSync(this.archivo);
      const datosParsed = JSON.parse(datos);
      const idToDelete = datosParsed.map((producto) => producto.id).indexOf(id);
      datosParsed.splice(idToDelete, 1);
      fs.writeFileSync('./productos.txt', JSON.stringify(datosParsed, null, 2));
      return 'Id Eliminado';
    } catch (err) {
      console.log('El ID no pudo ser eliminado');
    }
  }

  deleteFile() {
    fs.unlinkSync(this.archivo);
    return 'Archivo Eliminado';
  }

  getRamdom() {
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
