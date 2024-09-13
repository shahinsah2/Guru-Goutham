const express = require("express");
const customerController = require("../controllers/customerController");

const router = express.Router();

// Get all customers
router.get("/", customerController.getCustomers);

// Get customer by ID
router.get("/:id", customerController.getCustomerById);

// Create new customer
router.post("/", customerController.createCustomer);

// Update customer by ID
router.put("/:id", customerController.updateCustomer);

// Delete customer by ID
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
