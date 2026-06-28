//User routes -- handles all endpoints related to user profiles

const express = require ('express');
const router = express.Router();
const { db } = require('../index');

// Returns all users where isOpen is true. Used for the Browse Players tab
router.get('/feed', async (req,res) => {
    const snapshot = await db.collection('users').where('isOpen', '==', true).get();
    const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    res.send(users);
})

// Returns one profile with the specified uid, used globally for looking at individual player profiles
router.get('/:uid/profile', async (req, res) => {
   const uid = req.params.uid;
   const doc = await db.collection('users').doc(uid).get();

   if(!doc.exists){
    return res.status(404).send({ error: 'User not found'});
   }
   
   const userData = { 
   id: doc.id,
   ...doc.data()
   };

   res.send(userData);
})

// Updates user profile and returns a success message
router.put('/:uid/profile', async (req, res) => {
const updates = req.body;
const uid = req.params.uid;
const doc = await db.collection('users').doc(uid).get();

if(!doc.exists){
    return res.status(404).send({ error: 'User not found'});
   }

const data = await db.collection('users').doc(uid).update(updates);

res.send({ message: 'Profile updated successfully'});
})

module.exports = router;