const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customer_code: { type: String, required: true, unique: true },
  customer_type: { type: String },
  company: { type: String },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email_id: { type: String, required: true },
  phone: { type: String, required: true },
  landmark: { type: String },
  street: { type: String },
  state: { type: String },
  city: { type: String },
  country: { type: String },
  pincode: { type: String },
  added_date: { type: Date, default: Date.now },
  added_by: { type: String },
  remarks: { type: String },
  bank_name: { type: String },
  bank_address: { type: String },
  bank_ac_no: { type: String },
  pan_no: { type: String },
  bank_contact: { type: String },
  bank_phone: { type: String },
  others: { type: String },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
