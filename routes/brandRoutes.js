const express = require("express");
const brandController = require("../controllers/brandController");

const router = express.Router();

// Get all brands
router.get("/", brandController.getBrands);

// Get brand by ID
router.get("/:id", brandController.getBrandById);

// Create a new brand
router.post("/", brandController.createBrand);

// Update brand by ID
router.put("/:id", brandController.updateBrand);

// Delete brand by ID
router.delete("/:id", brandController.deleteBrand);

module.exports = router;
