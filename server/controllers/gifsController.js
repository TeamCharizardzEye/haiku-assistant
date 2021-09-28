const gifsController = {};

gifsController.checkCache = (req, res, next) => {
  console.log('Gifs: checkCache');

  return next();
};

gifsController.externalLookup = (req, res, next) => {
  console.log('Gifs: externalLookup');

  return next();
};

gifsController.addToCache = (req, res, next) => {
  console.log('Gifs: addToCache');

  return next();
};

module.exports = gifsController;
