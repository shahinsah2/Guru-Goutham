const express = require("express");
const contactTypeController = require("../controllers/contactTypeController");

const router = express.Router();

// Get all contact types
router.get("/", contactTypeController.getContactTypes);

// Get contact type by ID
router.get("/:id", contactTypeController.getContactTypeById);

// Create a new contact type
router.post("/", contactTypeController.createContactType);

// Update contact type by ID
router.put("/:id", contactTypeController.updateContactType);

// Delete contact type by ID
router.delete("/:id", contactTypeController.deleteContactType);

module.exports = router;
