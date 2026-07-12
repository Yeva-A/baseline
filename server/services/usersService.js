const { db } = require ('../index');

// Collects all users where isOpen is true
async function getOpenUsers (){
    const snapshot = await db.collection('users').where('isOpen', '==', true).get();
    const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
        }));
        return users;
}

// Retrieves data from single profile by uid
async function getProfile (uid){
    const doc = await db.collection('users').doc(uid).get();

    if(!doc.exists){
        const err = new Error ('User not found');
        err.status = 404;
        throw err;
        }
   
    const userData = { 
    id: doc.id,
    ...doc.data()
    };

    return userData;
}

// Updates single profile by uid with specified updates
async function updateProfile( uid, updates ){
    const doc = await db.collection('users').doc(uid).get();
    const allowedUpdates = {};
    
        if(!doc.exists){
        const err = new Error ('User not found');
        err.status = 404;
        throw err; 
        }
    
    if (updates.firstName !== undefined) allowedUpdates.firstName = updates.firstName;
    if (updates.lastName !== undefined) allowedUpdates.lastName = updates.lastName;
    if (updates.description !== undefined) allowedUpdates.description = updates.description;
    if (updates.skillLevel !== undefined) allowedUpdates.skillLevel = updates.skillLevel;
    if (updates.playStyle !== undefined) allowedUpdates.playStyle = updates.playStyle;
    if (updates.availability !== undefined ) allowedUpdates.availability = updates.availability;
    if (updates.isOpen !== undefined ) allowedUpdates.isOpen = updates.isOpen;

    
    const data = await db.collection('users').doc(uid).update(allowedUpdates);

    return { message: 'Profile updated successfully' };
}

module.exports = { getOpenUsers, getProfile, updateProfile };
