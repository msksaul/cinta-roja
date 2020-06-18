const { ProductService } = require('../services');

module.exports = {
  create: (req, res) => {
    ProductService.create(req.body)
      .then((product) => res.status(201).json(product))
      .catch((err) => res.status(400).json(err));
  },
};
