// Core dependencies
const admin = require ('firebase-admin');
const serviceAccount = require ('./serviceAccountKey.json');
const express = require ('express');
const cors = require('cors')
require('dotenv').config();

// Firebase setup
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Export db for use in route files
const db = admin.firestore();
module.exports = { db, admin };

// Route imports
const usersRouter = require ('./routes/users');
const authRouter = require('./routes/auth');
const matchpostsRouter = require ('./routes/matchposts');

// App initialization
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/matchposts', matchpostsRouter);

app.get('/', (req, res) => {
    res.send('Baseline API is live');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

