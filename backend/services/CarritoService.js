/* eslint-disable no-console */
const { Carrito } = require('../models/Carrito');

module.exports = {
  create: (body) => {
    const newProduct = new Carrito(body);
    // console.log(newProduct);
    return newProduct;
  },
};
