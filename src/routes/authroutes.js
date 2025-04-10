const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Import the controller

// Delegate the logic to the controller
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;