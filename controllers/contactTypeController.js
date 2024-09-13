const ContactType = require('../models/ContactType');

// Get all contact types
exports.getContactTypes = async (req, res) => {
  try {
    const contactTypes = await ContactType.find();
    res.json(contactTypes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get contact type by ID
exports.getContactTypeById = async (req, res) => {
  try {
    const contactType = await ContactType.findById(req.params.id);
    if (!contactType) return res.status(404).json({ message: 'Contact type not found' });
    res.json(contactType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new contact type
exports.createContactType = async (req, res) => {
  const { contact_type_code, contact_type, description, status } = req.body;

  const contactType = new ContactType({
    contact_type_code,
    contact_type,
    description,
    status
  });

  try {
    const newContactType = await contactType.save();
    res.status(201).json(newContactType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update contact type by ID
exports.updateContactType = async (req, res) => {
  const { contact_type_code, contact_type, description, status } = req.body;

  try {
    const updatedContactType = await ContactType.findByIdAndUpdate(
      req.params.id,
      { contact_type_code, contact_type, description, status },
      { new: true, runValidators: true }
    );
    if (!updatedContactType) return res.status(404).json({ message: 'Contact type not found' });
    res.json(updatedContactType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete contact type by ID
exports.deleteContactType = async (req, res) => {
  try {
    const contactType = await ContactType.findByIdAndDelete(req.params.id);
    if (!contactType) return res.status(404).json({ message: 'Contact type not found' });
    res.json({ message: 'Contact type deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
