const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

const checkPostExists = require("../middleware/checkPostExists");

// Index
router.get('/', postsController.index);

// Show
router.get('/:id', checkPostExists, postsController.show);

// Create
router.post('/', postsController.create);

// Update
router.put('/:id', checkPostExists, postsController.update);

// Modify
router.patch('/:id', checkPostExists, postsController.modify);

// Destroy
router.delete('/:id', checkPostExists, postsController.destroy);

module.exports = router;