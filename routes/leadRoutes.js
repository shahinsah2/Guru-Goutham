const express = require("express");
const leadController = require("../controllers/leadController");

const router = express.Router();

// Get all leads
router.get("/", leadController.getLeads);

// Get lead by ID
router.get("/:id", leadController.getLeadById);

// Create a new lead
router.post("/", leadController.createLead);

// Update lead by ID
router.put("/:id", leadController.updateLead);

// Delete lead by ID
router.delete("/:id", leadController.deleteLead);

module.exports = router;
