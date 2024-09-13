const Branch = require('../models/Branch');

// Get all branches
exports.getBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.json(branches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get branch by ID
exports.getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);
    if (!branch) return res.status(404).json({ message: 'Branch not found' });
    res.json(branch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new branch
exports.createBranch = async (req, res) => {
  const { branch_code, branch_name, address, pincode, country, state, city, landmark, status } = req.body;

  const branch = new Branch({ branch_code, branch_name, address, pincode, country, state, city, landmark, status });

  try {
    const newBranch = await branch.save();
    res.status(201).json(newBranch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update branch by ID
exports.updateBranch = async (req, res) => {
  const { branch_code, branch_name, address, pincode, country, state, city, landmark, status } = req.body;

  try {
    const updatedBranch = await Branch.findByIdAndUpdate(
      req.params.id,
      { branch_code, branch_name, address, pincode, country, state, city, landmark, status },
      { new: true, runValidators: true }
    );
    if (!updatedBranch) return res.status(404).json({ message: 'Branch not found' });
    res.json(updatedBranch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete branch by ID
exports.deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id);
    if (!branch) return res.status(404).json({ message: 'Branch not found' });
    res.json({ message: 'Branch deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
