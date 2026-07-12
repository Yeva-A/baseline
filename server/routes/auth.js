// Authentification routes -- handle registration and email domain verification

const express = require ('express');
const router = express.Router();
const authController = require ('../controllers/authController');

// Creates user account 
router.post('/register', authController.registerUser)

module.exports = router;