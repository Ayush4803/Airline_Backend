const { AirplaneServices } = require('../services');

// Create a new airplane
async function createAirplane(req, res) {
    try {
        const { modelNumber, capacity } = req.body;
        const airplane = await AirplaneServices.createAirplane({ modelNumber, capacity });
        return res.status(201).json({
            success: true,
            message: "Airplane created successfully",
            data: airplane
        });
    } catch (error) {
        console.error("Error creating airplane:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while creating airplane",
            error: error.message
        });
    }
}

// Get all airplanes
async function getAllAirplanes(req, res) {
    try {
        const airplanes = await AirplaneServices.getAllAirplanes();
        return res.status(200).json({
            success: true,
            data: airplanes
        });
    } catch (error) {
        console.error("Error fetching airplanes:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching airplanes",
            error: error.message
        });
    }
}

// Get a single airplane by id
async function getAirplaneById(req, res) {
    try {
        const { id } = req.params;
        const airplane = await AirplaneServices.getAirplaneById(id);
        if (!airplane) {
            return res.status(404).json({
                success: false,
                message: "Airplane not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: airplane
        });
    } catch (error) {
        console.error("Error fetching airplane:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while fetching airplane",
            error: error.message
        });
    }
}

// Update airplane by id
async function updateAirplane(req, res) {
    try {
        const { id } = req.params;
        const { modelNumber, capacity } = req.body;
        const airplane = await AirplaneServices.updateAirplane(id, { modelNumber, capacity });
        if (!airplane) {
            return res.status(404).json({
                success: false,
                message: "Airplane not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Airplane updated successfully",
            data: airplane
        });
    } catch (error) {
        console.error("Error updating airplane:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while updating airplane",
            error: error.message
        });
    }
}

// Delete airplane by id
async function deleteAirplane(req, res) {
    try {
        const { id } = req.params;
        const deletedRows = await AirplaneServices.deleteAirplane(id);
        if (deletedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Airplane not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Airplane deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting airplane:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting airplane",
            error: error.message
        });
    }
}

module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplaneById,
    updateAirplane,
    deleteAirplane
};
