/* eslint-disable no-console */
const { Products } = require('../models');

module.exports = {
  create: (body) => {
    const newProduct = new Products(body);
    return newProduct.save();
  },
  update: (params, body) => {
    const { id } = params;
    return Products.findByIdAndUpdate(id, body, { new: true });
  },
  findAll: () => Products.find(),
  findOne: (params) => {
    const { id } = params;
    return Products.findById(id);
  },
  deleteOne: (params) => {
    const { id } = params;
    return Products.findByIdAndDelete(id);
  },
};
