const mongoose = require('mongoose');

const CarritoSchema = mongoose.Schema({
  // id y arreglo producto

  // Datos Persona
  nombre: {
    Type: String,
  },
  direccion: {
    Type: String,
  },
  telefono: {
    Type: Number,
  },
  nit: {
    Type: String,
  },
  // Datos Productos
  name: [{
    type: String,
  }],
  cantidad: [{
    type: Number,
  }],
  price: [{
    type: Number,
  }],
});

const Carrito = mongoose.model('Carrito', CarritoSchema);

module.exports = { Carrito, CarritoSchema };
