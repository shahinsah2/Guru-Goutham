const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
  category_code: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  category_name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ProductCategory', productCategorySchema);
