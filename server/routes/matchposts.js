const express = require ('express');
const router = express.Router();
const matchpostsController = require ('../controllers/matchpostsController');

// Creates singular match post. Used for Match Board Screen 
router.post('/', matchpostsController.createMatchPost);

// Retrieves match posts that are open within a specific school domain. Used for Match Board Screen.
router.get('/', matchpostsController.getOpenMatchPosts);

// Updates existing match post claimedBy field with a specific user. Used for Match Board Screen.
router.put('/:matchPostId/claim', matchpostsController.claimMatchPost);

// Deletes existing match post. Used for My Matches Screen
router.delete('/:matchPostId', matchpostsController.deleteMatchPost);

module.exports = router;