const Customer = require('../models/Customer');

// Get all customers
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new customer
exports.createCustomer = async (req, res) => {
  const {
    customer_code,
    customer_type,
    company,
    first_name,
    last_name,
    email_id,
    phone,
    landmark,
    street,
    state,
    city,
    country,
    pincode,
    added_date,
    added_by,
    remarks,
    bank_name,
    bank_address,
    bank_ac_no,
    pan_no,
    bank_contact,
    bank_phone,
    others,
    status
  } = req.body;

  const customerData = {
    customer_code,
    customer_type,
    company,
    first_name,
    last_name,
    email_id,
    phone,
    landmark,
    street,
    state,
    city,
    country,
    pincode,
    added_date,
    added_by,
    remarks,
    bank_name,
    bank_address,
    bank_ac_no,
    pan_no,
    bank_contact,
    bank_phone,
    others,
    status
  };

  const customer = new Customer(customerData);

  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    Object.assign(customer, req.body);
    
    const updatedCustomer = await customer.save();
    res.json(updatedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    // await customer.remove();
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

