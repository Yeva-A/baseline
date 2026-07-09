// Authentification routes -- handle registration and email domain verification

const express = require ('express');
const router = express.Router();
const { db, admin} = require('../index');

// Registers a user account and verifies email domain
router.post('/register', async (req,res) => {
    const { email, password } = req.body; 
    const domain = email.split('@')[1]; //Extract domain from email
    const allowedDomains = ['wfu.edu'];

    if(!allowedDomains.includes(domain)){ // Check against allowed school domain
        return res.status(400).send({ error: 'Domain not accepted'});
    }
    const userRecord = await admin.auth().createUser({email, password}); //Create Firebase Auth account
    await db.collection('users').doc(userRecord.uid).set({ // Create Firestore profile document with default value
        email: email,
        school: domain,
        firstName: null,
        lastName: null,
        description: null,
        skillLevel: null,
        playStyle: null,
        availability: [],
        isOpen: false,
    });
    return res.send({ message: 'Registration successful', uid: userRecord.uid}) // Return success and uid to frontend
})

module.exports = router;