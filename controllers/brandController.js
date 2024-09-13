const Brand = require('../models/Brand');

// Get all brands
exports.getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get brand by ID
exports.getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) return res.status(404).json({ message: 'Brand not found' });
    res.json(brand);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new brand
exports.createBrand = async (req, res) => {
  const { brand_code, brand_name, description, status } = req.body;

  const brand = new Brand({
    brand_code,
    brand_name,
    description,
    status
  });

  try {
    const newBrand = await brand.save();
    res.status(201).json(newBrand);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update brand by ID
exports.updateBrand = async (req, res) => {
  const { brand_code, brand_name, description, status } = req.body;

  try {
    const updatedBrand = await Brand.findByIdAndUpdate(
      req.params.id,
      { brand_code, brand_name, description, status },
      { new: true, runValidators: true }
    );
    if (!updatedBrand) return res.status(404).json({ message: 'Brand not found' });
    res.json(updatedBrand);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete brand by ID
exports.deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) return res.status(404).json({ message: 'Brand not found' });
    res.json({ message: 'Brand deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
