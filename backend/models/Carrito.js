const mongoose = require('mongoose');

const CarritoSchema = mongoose.Schema({
  // id y arreglo producto

  // Datos Persona
  nombre: [{
    type: String,
    required: true,
    trim: true,
  }],
  direccion: [{
    type: String,
    required: true,
    trim: true,
  }],
  telefono: [{
    type: Number,
    required: true,
    trim: true,
  }],
  nit: [{
    type: String,
    required: true,
    trim: true,
  }],
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
