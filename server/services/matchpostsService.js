const { db, admin } = require('../index');

// Generates a new match post document in Firestore with auto-generated id 
// and sets default service fields (status, claimedBy, createdAt)
async function createMatchPost(data){
    const {postedBy, matchType, playStyle, skillLevel, dateTime, message, school } = data;
    const docRef = await db.collection('matchposts').add({
     postedBy,
     matchType,
     playStyle,
     skillLevel,
     dateTime,
     message: message || null,
     school,  
     status: 'open',
     claimedBy: null,
     createdAt: admin.firestore.FieldValue.serverTimestamp()
    })
    return { id: docRef.id };
}

// Retrieves all match posts that are open and within a particular school
async function getOpenMatchPosts(school){
    const snapshot = await db.collection('matchposts')
    .where('status', '==', 'open')
    .where('school', '==', school )
    .get();

    const matchPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return matchPosts;
}

// Updates existing match post's claimedBy and status from 'open' to 'claimed'
async function claimMatchPost(matchPostId, claimedBy){
    const doc = await db.collection('matchposts').doc(matchPostId).get();

    if (!doc.exists){
        const err = new Error('Match post not found');
        err.status = 404;
        throw err;
    }

    if (doc.data().status !== 'open'){
        const err = new Error('This match is claimed');
        err.status = 409;
        throw err;
    }

    const data = await db.collection('matchposts').doc(matchPostId).update({
        claimedBy: claimedBy,
        status: 'claimed'
    });
    return {message: 'Match claimed successfully '}

    //TODO: create a chat document between postedBy and claimedBy once API is built

}

// Deletes existiig match post
async function deleteMatchPost(matchPostId){
    const doc = await db.collection('matchposts').doc(matchPostId).get();

    if (!doc.exists){
        const err = new Error('Match post not found');
        err.status = 404;
        throw err;
    }

    if(doc.data().claimedBy){
        // TODO: send notification to claimedBy user once notification API is built
    }

    await db.collection('matchposts').doc(matchPostId).delete();
    return { message: 'Match post deleted successfully' };
}
module.exports = { createMatchPost, getOpenMatchPosts, claimMatchPost, deleteMatchPost };