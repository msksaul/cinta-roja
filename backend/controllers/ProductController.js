/* eslint-disable no-console */
const { ProductService } = require('../services');

module.exports = {
  create: (req, res) => {
    ProductService.create(req.body)
      .then((product) => res.status(201).json(product))
      .catch((err) => res.status(400).json(err));
  },
  update: async (req, res) => {
    console.log(req.body);
    await ProductService.update(req.params, req.body)
      .then((upDate) => {
        res.status(200).json(upDate);
        console.log(upDate);
      })
      .catch((err) => res.status(404).json(err));
  },
  findAll: async (req, res) => {
    await ProductService.findAll()
      .then((data) => {
        if (!data) res.status(404).json({ message: 'product not found' });
        res.status(200).json(data);
      })
      .catch((err) => res.status(400).json(err));
  },
  findOne: async (req, res) => {
    await ProductService.findOne(req.params)
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(404).json(err));
  },
  deleteOne: async (req, res) => {
    await ProductService.deleteOne(req.params)
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(404).json(err));
  },
};
