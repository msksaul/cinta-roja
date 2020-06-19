const express = require('express');

const router = express.Router();

const { ProductValidator } = require('../validator');
const { ProductController } = require('../controllers');

// Create product
// /products -> coleccion
router.post('/products',
  ProductValidator.create,
  ProductController.create);

// Update
router.patch('/products/:id',
  ProductValidator.update,
  ProductController.update);

// READ ALL
router.get('/products',
  ProductController.findAll);

// READ ONE
router.get('/products/:id',
  ProductValidator.findOne,
  ProductController.findOne);

// Delete
router.delete('/products/:id',
  ProductValidator.deleteOne,
  ProductController.deleteOne);

module.exports = router;
