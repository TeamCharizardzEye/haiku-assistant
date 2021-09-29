const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const authController = {};
const secret = 'supersecret';

// Check to see if a user profile exists
authController.findProfile = async (req, res, next) => {
  // First check for cookies for the user, use the name on the request body otherwise
  if (req.cookies.username) {
    res.locals.username = req.cookies.username;
  } else {
    res.locals.username = req.body.username;
  }

  try {
    // Query the database for the username
    const doc = await User.findOne({ username: res.locals.username }).exec();

    // Keep track of result (null doc means user does not exist)
    if (doc) res.locals.userExists = true;
    else res.locals.userExists = false;
  } catch (err) {
    console.log(err);
    return next();
  }

  return next();
};

// Create a user profile if one does not yet exist with provided username
authController.createProfile = async (req, res, next) => {
  // User must not already exist
  if (!res.locals.userExists) {
    try {
      // Create a new user doc
      const doc = await User.create({
        username: req.body.username,
        password: req.body.password,
        haikuID: [],
      });

      // Update the status of user
      res.locals.userExists = true;
      res.locals.userVerified = true;
    } catch (err) {
      console.log(err);
      return next();
    }
  }

  return next();
};

// Verify a user's credentials
authController.verifyUser = async (req, res, next) => {
  // Make sure user exists
  if (res.locals.userExists) {
    try {
      // Find the user, then use bcrypt to compare hashed passwords
      const doc = await User.findOne({ username: res.locals.username });
      const hash = doc.get('password');
      bcrypt.compare(req.body.password, hash, function(err, result) {
        // Set verified status to result of comparison
        res.locals.userVerified = result;
        return next();
      });
    } catch (err) {
      console.log(err);
      return next();
    }
  }

  return next();
};

// GitHub Oauth flow
authController.githubOauth = (req, res, next) => {
  console.log('Auth: githubOauth');

  return next();
};

// Give cookies to the user for authentication purposes
authController.giveCookies = (req, res, next) => {
  // As long as the user exists and was verified, give them cookies
  if (res.locals.userExists && res.locals.userVerified) {
    res.cookie('username', res.locals.username);
    res.cookie('secret', secret);
  }

  return next();
};

module.exports = authController;
