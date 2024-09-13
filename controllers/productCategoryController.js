const ProductCategory = require('../models/ProductCategory');

// Get all product categories
exports.getProductCategories = async (req, res) => {
  try {
    const productCategories = await ProductCategory.find();
    res.json(productCategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get product category by ID
exports.getProductCategoryById = async (req, res) => {
  try {
    const productCategory = await ProductCategory.findById(req.params.id);
    if (!productCategory) return res.status(404).json({ message: 'Product category not found' });
    res.json(productCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new product category
exports.createProductCategory = async (req, res) => {
  const { category_code, category_name, description, status } = req.body;

  const productCategory = new ProductCategory({
    category_code,
    category_name,
    description,
    status
  });

  try {
    const newProductCategory = await productCategory.save();
    res.status(201).json(newProductCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update product category by ID
exports.updateProductCategory = async (req, res) => {
  const { category_code, category_name, description, status } = req.body;

  try {
    const updatedProductCategory = await ProductCategory.findByIdAndUpdate(
      req.params.id,
      { category_code, category_name, description, status },
      { new: true, runValidators: true }
    );
    if (!updatedProductCategory) return res.status(404).json({ message: 'Product category not found' });
    res.json(updatedProductCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete product category by ID
exports.deleteProductCategory = async (req, res) => {
  try {
    const productCategory = await ProductCategory.findByIdAndDelete(req.params.id);
    if (!productCategory) return res.status(404).json({ message: 'Product category not found' });
    res.json({ message: 'Product category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
