
// Sends a PUT request to a claim a specific match post for the curent user
async function claimMatchPost (matchPostId, claimedBy){
    const response = await fetch (`http://10.0.0.237:3000/matchposts/${matchPostId}/claim`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claimedBy })
    });

    // Parse response and handles success or error 
    const data = await response.json();

    if (!response.ok){
        throw new Error(data.error);
    }
    return data;
}

// Sends GET request to retrieve all open match posts from a specified school
async function getOpenMatchPosts(school){
    const response = await fetch ( `http://10.0.0.237:3000/matchposts?school=${school}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    });

    const data = await response.json();

    if (!response.ok){
        throw new Error(data.error);
    }
    
    return data;
}

module.exports = { claimMatchPost, getOpenMatchPosts };