const haikuController = {};

haikuController.userLookup = (req, res, next) => {
  // Returns the list of haikus a user has saved
  console.log('Haiku: userLookup');

  return next();
};

haikuController.haikuLookup = (req, res, next) => {
  // Returns a specific haiku
  console.log('Haiku: haikuLookup');

  return next();
};

haikuController.saveHaiku = (req, res, next) => {
  // Saves the haiku to the database
  console.log('Haiku: saveHaiku');

  return next();
};

module.exports = haikuController;
