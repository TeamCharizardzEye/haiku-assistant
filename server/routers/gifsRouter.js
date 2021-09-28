const express = require('express');
const gifsController = require('../controllers/gifsController');

const router = express.Router();

// Check the cache for a word, perform external lookup if necessary, add results to cache
router.get('/', 
  gifsController.checkCache,
  gifsController.externalLookup,
  gifsController.addToCache,
  (req, res) => {
    res.status(200).send('gif URI string');
});

module.exports = router;
