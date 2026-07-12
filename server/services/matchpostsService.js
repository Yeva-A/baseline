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
    .where ('status', '==', 'open')
    .where('school', '==', school)
    .get();

    const matchPosts = await Promise.all(
    snapshot.docs.map(async (doc) => {
        const postData = doc.data();
        const userDoc = await db.collection('users').doc(postData.postedBy).get();
        const posterName = userDoc.exists ? userDoc.data().firstName : null;

        return {
            id: doc.id,
            ...postData,
            postedByName: posterName
        };
    })
);
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

// Updates specific fields of a singular match post when unclaimed
async function editMatchPost(matchPostId, updates){
 
    const doc = await db.collection('matchposts').doc(matchPostId).get();
    const allowedUpdates = {};

    if(!doc.exists){
        const err = new Error ('Match post not found');
        err.status = 404;
        throw err;
    }

    if(doc.data().claimedBy == null ){
        if (updates.matchType !== undefined ) allowedUpdates.matchType = updates.matchType;
        if (updates.playStyle !== undefined ) allowedUpdates.playStyle = updates.playStyle;
        if (updates.skillLevel !== undefined ) allowedUpdates.skillLevel = updates.skillLevel;
        if (updates.dateTime !== undefined ) allowedUpdates.dateTime = updates.dateTime;
        if (updates.message !== undefined ) allowedUpdates.message = updates.message;
    
        if (Object.keys(allowedUpdates).length === 0 ) {
            const err = new Error('The fields provided cannot be changed');
            err.status = 400;
            throw err;
        }

        const data = await db.collection('matchposts').doc(matchPostId).update(allowedUpdates);

        return { message: 'Match post updated successfully' };

        } else {
            const err = new Error('This match is claimed');
            err.status = 409;
            throw err;
        }

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

module.exports = { createMatchPost, getOpenMatchPosts, claimMatchPost, editMatchPost, deleteMatchPost };