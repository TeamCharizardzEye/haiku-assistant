const dictController = {};

// Check cache for saved results
dictController.checkCache = (req, res, next) => {
  console.log('Dict: checkCache');

  return next();
};

// Make external API calls if cache does not have word
dictController.externalLookup = (req, res, next) => {
  // Make sure to use Promise.all here
  console.log('Dict: externalLookup');

  return next();
};

// Add word to cache if the external API calls were made
dictController.addToCache = (req, res, next) => {
  console.log('Dict: addToCache');

  return next();
};

module.exports = dictController;
