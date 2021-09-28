const express = require('express');
const router = express.Router();
const dictController = require('../controllers/dictController');

// Check the cache for a word, perform external lookup if necessary, add results to cache
router.get('/', 
  dictController.checkCache, 
  dictController.externalLookup, 
  dictController.addToCache, 
  (req, res) => {
    res.status(200).json({ word: 'bituminous' });
});

module.exports = router;
