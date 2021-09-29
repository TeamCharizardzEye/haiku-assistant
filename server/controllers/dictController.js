const fetch = require('node-fetch');

const dictController = {};
const cache = {};

const rhymeURI = 'https://rhymebrain.com/talk?function=getRhymes&word=';
const thesaurusURI = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/';
const thesaurusAPIkey = '?key=9d7ad68c-46e0-463e-b447-d5ca02f0e124';

// Check cache for saved results
dictController.checkCache = (req, res, next) => {
  if (cache[req.body.word]) {
    res.locals.cached = true;
    res.locals.result = cache[req.body.word];
  } else res.locals.cached = false;

  return next();
};

// Make external API calls if cache does not have word
dictController.externalLookup = async (req, res, next) => {
  if (!res.locals.cached) {
    // Make a bunch of API calls
    const apiResponses = [];
    try {
      const rhymeResp = fetch(rhymeURI.concat(req.body.word)).then(data => data.json());
      const thesResp = fetch(thesaurusURI.concat(req.body.word, thesaurusAPIkey)).then(data => data.json());

      // Wait for all of the promises to resolve
      await Promise.all([rhymeResp, thesResp])
        .then(results => {
          results.forEach(result => apiResponses.push(result));
        })
        .catch(err => {
          return next(err);
        });
    } catch (err) {
      console.log(err);
      return next();
    }

    const processedResp = {};

    processedResp.rhymes = [];
    if (apiResponses[0].length < 3) {
      for (let i = 0; i < apiResponses[0].length; i++) {
        processedResp.rhymes.push(apiResponses[0][i]);
      }
    } else {
      for (let i = 0; i < 3; i++) {
        const randomNum = Math.floor(Math.random() * apiResponses[0].length);
        processedResp.rhymes.push(apiResponses[0][randomNum]);
      }
    }

    processedResp.synonyms = [];
    const allSyns = apiResponses[1][0]['meta']['syns'][0];
    if (allSyns.length < 3) {
      for (let i = 0; i < allSyns.length; i++) {
        processedResp.synonyms.push(allSyns[i]);
      }
    } else {
      for (let i = 0; i < 3; i++) {
        const randomNum = Math.floor(Math.random() * allSyns.length);
        processedResp.synonyms.push(allSyns[randomNum]);
      }
    }

    res.locals.result = processedResp;
  }

  return next();
};

// Add word to cache if the external API calls were made
dictController.addToCache = (req, res, next) => {
  if (!res.locals.cached) {
    cache[req.body.word] = res.locals.result;
  }

  console.log(cache);

  return next();
};

module.exports = dictController;
