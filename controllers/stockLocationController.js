const StockLocation = require("../models/StockLocation");

// Get all stock locations
exports.getStockLocations = async (req, res) => {
  try {
    const stockLocations = await StockLocation.find();
    res.json(stockLocations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get stock location by ID
exports.getStockLocationById = async (req, res) => {
  try {
    const stockLocation = await StockLocation.findById(req.params.id);
    if (!stockLocation)
      return res.status(404).json({ message: "Stock location not found" });
    res.json(stockLocation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new stock location
exports.createStockLocation = async (req, res) => {
  const { location_code, location_name, address, status } = req.body;

  const stockLocation = new StockLocation({
    location_code,
    location_name,
    address,
    status,
  });

  try {
    const newStockLocation = await stockLocation.save();
    res.status(201).json(newStockLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update stock location by ID
exports.updateStockLocation = async (req, res) => {
  const { location_code, location_name, address, status } = req.body;

  try {
    const updatedStockLocation = await StockLocation.findByIdAndUpdate(
      req.params.id,
      { location_code, location_name, address, status },
      { new: true, runValidators: true }
    );
    if (!updatedStockLocation)
      return res.status(404).json({ message: "Stock location not found" });
    res.json(updatedStockLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete stock location by ID
exports.deleteStockLocation = async (req, res) => {
  try {
    const stockLocation = await StockLocation.findByIdAndDelete(req.params.id);
    if (!stockLocation)
      return res.status(404).json({ message: "Stock location not found" });
    res.json({ message: "Stock location deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
