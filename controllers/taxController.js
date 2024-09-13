const Tax = require('../models/Tax');

// Get all taxes
exports.getTaxes = async (req, res) => {
  try {
    const taxes = await Tax.find();
    res.json(taxes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get tax by ID
exports.getTaxById = async (req, res) => {
  try {
    const tax = await Tax.findById(req.params.id);
    if (!tax) return res.status(404).json({ message: 'Tax not found' });
    res.json(tax);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new tax
exports.createTax = async (req, res) => {
  const { tax_code, tax_name, percentage, status } = req.body;

  const tax = new Tax({
    tax_code,
    tax_name,
    percentage,
    status
  });

  try {
    const newTax = await tax.save();
    res.status(201).json(newTax);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update tax by ID
exports.updateTax = async (req, res) => {
  const { tax_code, tax_name, percentage, status } = req.body;

  try {
    const updatedTax = await Tax.findByIdAndUpdate(
      req.params.id,
      { tax_code, tax_name, percentage, status },
      { new: true, runValidators: true }
    );
    if (!updatedTax) return res.status(404).json({ message: 'Tax not found' });
    res.json(updatedTax);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete tax by ID
exports.deleteTax = async (req, res) => {
  try {
    const tax = await Tax.findByIdAndDelete(req.params.id);
    if (!tax) return res.status(404).json({ message: 'Tax not found' });
    res.json({ message: 'Tax deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
