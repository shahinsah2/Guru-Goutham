const mongoose = require('mongoose');

const taxSchema = new mongoose.Schema({
  tax_code: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  tax_name: {
    type: String,
    required: true,
    trim: true
  },
  percentage: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tax', taxSchema);
