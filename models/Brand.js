const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  brand_code: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  brand_name: {
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

module.exports = mongoose.model('Brand', brandSchema);
