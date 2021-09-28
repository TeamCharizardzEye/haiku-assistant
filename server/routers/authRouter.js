const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Success: create and log in user and return cookie. Failure: prompt user to choose a different profile name.
router.post('/signup', 
  authController.findProfile,
  authController.createProfile,
  authController.giveCookies,
  (req, res) => {
    res.status(201).send('Account created');
});

// Success: log in user and return cookie. Failure: prompt user to enter correct credentials.
router.post('/login', 
  authController.findProfile,
  authController.verifyUser,
  authController.giveCookies,
  (req, res) => {
    res.status(200).send('Logged in');
});

// GitHub Oauth flow - probably going to require some more stuff I scaffolded yet
router.post('/github', 
  authController.githubOauth,
  authController.giveCookies,
  (req, res) => {
    res.status(200).send('This one is more complicated.');
});

module.exports = router;
