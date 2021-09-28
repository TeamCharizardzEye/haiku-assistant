const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const haikuController = require('../controllers/haikuController');

// Return a list of a user's haikus
router.get('/list', 
  authController.verifyUser,
  haikuController.userLookup,
  (req, res) => {
    res.status(200).json({ haikuId: 'title' });
});

// Return a specific haiku that the user has access to
router.get('/retrieve', 
  authController.verifyUser,
  haikuController.haikuLookup,
  (req, res) => {
    res.status(200).json('haiku object');
});

// Either create a new haiku or update an existing haiku in the database
router.post('/save', 
  authController.verifyUser,
  haikuController.haikuLookup,
  haikuController.saveHaiku,
  (req, res) => {
    res.status(201).send('Haiku saved to database');
});

module.exports = router;
