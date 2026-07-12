const { db, admin } = require ('../index');

const allowedDomains = ['wfu.edu'];

// Checks whether an email's domain is in the allowed domains list
function isValidDomain (email){
    const domain = email.split('@')[1];   
    return allowedDomains.includes(domain)
}

// Creates firebase auth account and firestore profile document with default values
async function createUser (email, password){
    const domain = email.split('@')[1];
    const userRecord = await admin.auth().createUser({email, password}); 
    await db.collection('users').doc(userRecord.uid).set({ 
        email: email,
        school: domain,
        firstName: null,
        lastName: null,
        description: null,
        skillLevel: null,
        playStyle: [], 
        availability: [],
        isOpen: false,
})
    return { uid: userRecord.uid }
}

module.exports = { isValidDomain, createUser };
