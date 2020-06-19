const mongoose = require('mongoose');

const CarritoSchema = mongoose.Schema({
  // id y arreglo producto

  name: {
    type: String,
  },
  cantidad: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

const Carrito = mongoose.model('Carrito', CarritoSchema);

module.exports = { Carrito, CarritoSchema };
