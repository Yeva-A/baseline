const { 
    createMatchPost: createMatchPostService,
    getOpenMatchPosts: getOpenMatchPostsService,
    claimMatchPost: claimMatchPostService,
    deleteMatchPost: deleteMatchPostService
} = require('../services/matchpostsService');

// Generates match post from the request body, returns its id, or an error on failure
async function createMatchPost (req,res){
    try {
        const data = req.body;
        const result = await createMatchPostService(data);
        res.send(result);
    } catch (err) {
        res.status(err.status || 500 ).send({ error: err.message });
    }
}

// Retrieves match posts from the school query, sends the matchposts, or an error on failure
async function getOpenMatchPosts(req,res) {
    const school = req.query.school;
    try {
        const matchPosts = await getOpenMatchPostsService(school);
        res.send(matchPosts);
    } catch (err){
        res.status(err.status || 500 ).send({ error: err.message });
    }
}

// Claims a match post by matchPostId, returns 404 if not found or 409 if already claimed 
async function claimMatchPost(req,res){
    const matchPostId = req.params.matchPostId;
    const claimedBy = req.body.claimedBy;
    try {
        const claimedPost = await claimMatchPostService(matchPostId, claimedBy);
        res.send(claimedPost);
    } catch (err) {
        res.status(err.status || 500 ).send({ error: err.message })
    }

}

// Deletes an existing match post by matchPostId, returns 404 if not found  
async function deleteMatchPost(req,res){
    const matchPostId = req.params.matchPostId;
    try {
        const deletePost = await deleteMatchPostService(matchPostId);
        res.send(deletePost);
    } catch (err){
        res.status(err.status || 500 ).send({ error: err.message });
    }
}
module.exports = { createMatchPost, getOpenMatchPosts, claimMatchPost, deleteMatchPost };