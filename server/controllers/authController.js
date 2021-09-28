const authController = {};

// Check to see if a user profile exists
authController.findProfile = (req, res, next) => {
  console.log('Auth: findProfile');

  return next();
};

// Create a user profile if one does not yet exist with provided username
authController.createProfile = (req, res, next) => {
  console.log('Auth: createProfile');

  return next();
};

// Verify a user's credentials
authController.verifyUser = (req, res, next) => {
  console.log('Auth: verifyUser');

  return next();
};

// GitHub Oauth flow
authController.githubOauth = (req, res, next) => {
  console.log('Auth: githubOauth');

  return next();
};

// Give cookies to the user for authentication purposes
authController.giveCookies = (req, res, next) => {
  console.log('Auth: giveCookies');

  return next();
};

module.exports = authController;
