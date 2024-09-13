const mongoose = require('mongoose');

const contactTypeSchema = new mongoose.Schema({
  contact_type_code: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  contact_type: {
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

module.exports = mongoose.model('ContactType', contactTypeSchema);
