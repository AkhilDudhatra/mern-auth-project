const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Public Routes
router.post('/login', authController.login);
router.post('/register', authController.register); // New registration route
router.post('/forgotpassword', authController.forgotPassword);
router.put('/resetpassword/:resettoken', authController.resetPassword);

// Protected Route
router.get('/userdata', protect, authController.getUserData);

module.exports = router;
