const express = require('express');

const router = express.Router();

const { ProductValidator } = require('../validator');
const { ProductController } = require('../controllers');
const { verifyToken } = require('../middlewares');

// Create product
// /products -> coleccion
router.post('/products',
  verifyToken,
  ProductValidator.create,
  ProductController.create);

// Update
router.patch('/products/:id',
  verifyToken,
  ProductValidator.update,
  ProductController.update);

// READ ALL
router.get('/products',
  verifyToken,
  ProductController.findAll);

// READ ONE
router.get('/products/:id',
  verifyToken,
  ProductValidator.findOne,
  ProductController.findOne);

// Delete
router.delete('/products/:id',
  verifyToken,
  ProductValidator.deleteOne,
  ProductController.deleteOne);

module.exports = router;
