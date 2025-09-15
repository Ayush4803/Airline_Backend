const express = require('express');
const router = express.Router();

// Import controllers and routes
const { infoController } = require('../controllers');
const airplaneRoutes = require('./airplane-routes');

// Mount routes
router.use('/airplanes', airplaneRoutes);
// router.get('/info', infoController.info);

module.exports = router;
