const fetch = require('node-fetch');

const gifsController = {};
const cache = {};

const giphyURIpart1 = 'https://api.giphy.com/v1/gifs/search?api_key=gz4bTyYI0aDuPn0Z3Xx2urjt5Kb2aNNz&q=';
const giphyURIpart2 = '&limit=1&offset=0&rating=pg&lang=en';

// Check cache for a saved gif URI
gifsController.checkCache = (req, res, next) => {
  if (cache[req.body.phrase]) {
    res.locals.cached = true;
    res.locals.result = cache[req.body.phrase];
  } else res.locals.cached = false;

  return next();
};

// If no gif for that phrase in cache, fetch one from giphy
gifsController.externalLookup = async (req, res, next) => {
  // Take the phrase and format it for the query
  const strArray = req.body.phrase.toLowerCase().split(' ');
  const formattedStr = strArray.map(str => str.replace(/[^a-z]/gm, '')).join('+');

  // console.log(formattedStr);

  // Send off the query to giphy
  if (!res.locals.cached) {
    let apiResponse;
    try {
      apiResponse = await fetch(giphyURIpart1.concat(formattedStr, giphyURIpart2)).then(data => data.json());
    } catch (err) {
      console.log(err);
      return next();
    }

    // res.locals.result = apiResponse.data[0].images.original.url;
    // Process the response so that just the GIF URI is stored
    const resultURL = apiResponse.data[0].images.original.url;
    let processedURL = resultURL.replace('https://media1', 'https://i');
    const lastSlash = processedURL.lastIndexOf('/');
    processedURL = processedURL.slice(0, lastSlash).concat('/giphy.webp');
    res.locals.result = processedURL;

    // console.log(res.locals.result);
  }

  return next();
};

gifsController.addToCache = (req, res, next) => {
  // If the result was not already cached, then save it
  if (!res.locals.cached) {
    cache[req.body.word] = res.locals.result;
  }

  console.log(cache);

  return next();
};

module.exports = gifsController;
