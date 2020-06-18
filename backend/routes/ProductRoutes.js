const express = require('express');

const router = express.Router();

const { ProductValidator } = require('../validator');
const { ProductController } = require('../controllers');

// Create product
router.post('/products',
  ProductValidator.create,
  ProductController.create);

module.exports = router;
