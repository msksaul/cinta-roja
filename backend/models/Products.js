const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  stock: {
    type: Number,
    default: 1,
  },
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
