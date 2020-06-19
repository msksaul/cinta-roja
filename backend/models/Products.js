const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  stock: {
    type: Number,
    default: 1,
  },
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
