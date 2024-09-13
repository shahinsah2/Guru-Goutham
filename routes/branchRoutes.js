const express = require('express');
const branchController = require('../controllers/branchController');

const router = express.Router();

// Get all branches
router.get('/', branchController.getBranches);

// Get branch by ID
router.get('/:id', branchController.getBranchById);

// Create a new branch
router.post('/', branchController.createBranch);

// Update branch by ID
router.put('/:id', branchController.updateBranch);

// Delete branch by ID
router.delete('/:id', branchController.deleteBranch);

module.exports = router;
