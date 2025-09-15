const express = require('express');
const router = express.Router();
const { 
    createAirplane,
    getAllAirplanes,
    getAirplaneById,
    updateAirplane,
    deleteAirplane
} = require('../controllers/airplane-controller');

// Airplane routes
router.post('/', createAirplane);
router.get('/', getAllAirplanes);
router.get('/:id', getAirplaneById);
router.put('/:id', updateAirplane);
router.delete('/:id', deleteAirplane);

module.exports = router;
