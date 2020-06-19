const express = require('express');

const router = express.Router();

// Routes
router.use(require('./UsersRoutes'));
router.use(require('./AuthRoutes'));
router.use(require('./ProductRoutes'));
router.use(require('./CarritoRoutes'));

module.exports = router;
