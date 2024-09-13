const Role = require("../models/Role");

// Get all roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get role by ID
exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: "Role not found" });
    res.json(role);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new role
exports.createRole = async (req, res) => {
  const { name, description, status } = req.body;

  const roleData = { name, description, status };

  const role = new Role(roleData);

  try {
    const newRole = await role.save();
    res.status(201).json(newRole);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a role by ID
exports.updateRole = async (req, res) => {
  const { name, description, status } = req.body;

  try {
    const updatedRole = await Role.findByIdAndUpdate(
      req.params.id,
      { name, description, status },
      { new: true, runValidators: true }
    );
    if (!updatedRole)
      return res.status(404).json({ message: "Role not found" });
    res.json(updatedRole);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a role by ID
exports.deleteRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    if (!role) return res.status(404).json({ message: "Role not found" });
    res.json({ message: "Role deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
