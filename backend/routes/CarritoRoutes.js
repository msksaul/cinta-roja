const express = require('express');

const router = express.Router();

const { CarritoController } = require('../controllers');
const { CarritoValidator } = require('../validator');

router.post('/users/:id/compra',
  CarritoValidator.create,
  CarritoController.create);

module.exports = router;
