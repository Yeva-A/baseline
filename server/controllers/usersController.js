const { 
    getOpenUsers, 
    getProfile: getProfileService,
    updateProfile: updateProfileService
} = require ('../services/usersService');

// Retrieves all user profiles where isOpen is true
async function getFeed (req,res){
    const users = await getOpenUsers();
    res.send(users);
}

// Retrieves a single user's profile by uid. Returns 404 if the user doesnt exist
async function getProfile (req, res){
    const uid  = req.params.uid;
    try {
        const result = await getProfileService(uid);
        res.send(result);
    }
    catch (err) {
        res.status(err.status).send({ error: err.message});
    }
}

// Updates a single users profile by uid. Returns 404 if the user doesn't exist
async function updateProfile(req, res){
    const uid = req.params.uid;
    const updates = req.body;
    try {
        const result = await updateProfileService(uid, updates);
        res.send(result);
    }
    catch (err){
        res.status(err.status).send({ error: err.message })
    }
}

module.exports = { getFeed, getProfile, updateProfile };