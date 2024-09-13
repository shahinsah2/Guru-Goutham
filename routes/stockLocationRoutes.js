const express = require("express");
const stockLocationController = require("../controllers/stockLocationController");

const router = express.Router();

// Get all stock locations
router.get("/", stockLocationController.getStockLocations);

// Get stock location by ID
router.get("/:id", stockLocationController.getStockLocationById);

// Create a new stock location
router.post("/", stockLocationController.createStockLocation);

// Update stock location by ID
router.put("/:id", stockLocationController.updateStockLocation);

// Delete stock location by ID
router.delete("/:id", stockLocationController.deleteStockLocation);

module.exports = router;
