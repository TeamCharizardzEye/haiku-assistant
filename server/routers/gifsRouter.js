const express = require('express');
const gifsController = require('../controllers/gifsController');

const router = express.Router();

// Check the cache for a word, perform external lookup if necessary, add results to cache
router.post('/', 
  gifsController.checkCache,
  gifsController.externalLookup,
  gifsController.addToCache,
  (req, res) => {
    res.status(200).json(res.locals.result);
});

module.exports = router;
