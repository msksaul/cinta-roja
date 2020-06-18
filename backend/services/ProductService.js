const { Products } = require('../models');

module.exports = {
  create: (body) => {
    const newProduct = new Products(body);
    return newProduct.save();
  },
};
