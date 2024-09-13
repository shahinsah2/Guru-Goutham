const express = require("express");
const taxController = require("../controllers/taxController");

const router = express.Router();

// Get all taxes
router.get("/", taxController.getTaxes);

// Get tax by ID
router.get("/:id", taxController.getTaxById);

// Create a new tax
router.post("/", taxController.createTax);

// Update tax by ID
router.put("/:id", taxController.updateTax);

// Delete tax by ID
router.delete("/:id", taxController.deleteTax);

module.exports = router;
