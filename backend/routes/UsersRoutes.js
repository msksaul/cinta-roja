const express = require('express');

const router = express.Router();

const { UsersValidator } = require('../validator');
const { UsersController } = require('../controllers');

// Create User
router.post('/register',
  UsersValidator.create,
  UsersController.create);

module.exports = router;
