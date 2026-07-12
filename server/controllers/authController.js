const { isValidDomain, createUser } = require('../services/authService');

// Registers a new user
async function registerUser (req, res){
    const { email, password } = req.body;

    if (!isValidDomain(email)){
        return res.status(400).send({ error: 'Invalid Email'});
    }

    const result = await createUser( email, password );
    res.send({message: 'Registration successful', uid: result.uid});
}

module.exports = { registerUser };