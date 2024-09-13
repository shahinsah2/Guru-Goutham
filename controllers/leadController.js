const Lead = require("../models/Lead");

// Get all leads
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().populate("customer"); 
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get lead by ID
exports.getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id).populate("customer");
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new lead
exports.createLead = async (req, res) => {
  const {
    lead_code,
    lead_type,
    customer_code,
    generated_by,
    lead_mode,
    lead_date,
    lead_title,
    lead_details,
    status,
  } = req.body;

  const leadData = {
    lead_code,
    lead_type,
    customer_code,
    generated_by,
    lead_mode,
    lead_date,
    lead_title,
    lead_details,
    status,
  };

  const lead = new Lead(leadData);

  try {
    const newLead = await lead.save();
    res.status(201).json(newLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a lead by ID
exports.updateLead = async (req, res) => {
  const {
    lead_code,
    lead_type,
    customer_code,
    generated_by,
    lead_mode,
    lead_date,
    lead_title,
    lead_details,
    status,
  } = req.body;

  try {
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      {
        lead_code,
        lead_type,
        customer_code,
        generated_by,
        lead_mode,
        lead_date,
        lead_title,
        lead_details,
        status,
      },
      { new: true, runValidators: true }
    );
    if (!updatedLead)
      return res.status(404).json({ message: "Lead not found" });
    res.json(updatedLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a lead by ID
exports.deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json({ message: "Lead deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
