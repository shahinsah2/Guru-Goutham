const express = require("express");
const productCategoryController = require("../controllers/productCategoryController");

const router = express.Router();

// Get all product categories
router.get("/", productCategoryController.getProductCategories);

// Get product category by ID
router.get("/:id", productCategoryController.getProductCategoryById);

// Create a new product category
router.post("/", productCategoryController.createProductCategory);

// Update product category by ID
router.put("/:id", productCategoryController.updateProductCategory);

// Delete product category by ID
router.delete("/:id", productCategoryController.deleteProductCategory);

module.exports = router;
