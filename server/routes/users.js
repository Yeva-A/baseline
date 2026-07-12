//User routes -- handles all endpoints related to user profiles

const express = require ('express');
const router = express.Router();
const usersController = require ('../controllers/usersController');

// Returns all users where isOpen is true. Used for the Browse Players tab
router.get('/feed', usersController.getFeed)

// Returns one profile with the specified uid, used globally for looking at individual player profiles
router.get('/:uid/profile', usersController.getProfile)

// Updates user profile and returns a success message
router.put('/:uid/profile', usersController.updateProfile )

module.exports = router;