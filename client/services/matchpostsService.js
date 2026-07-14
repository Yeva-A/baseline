
// Sends a PUT request to a claim a specific match post for the curent user
async function claimMatchPost (matchPostId, claimedBy){
    const response = await fetch (`http://192.168.1.154:3000/matchposts/${matchPostId}/claim`,{
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

module.exports = { claimMatchPost };