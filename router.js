var express = require('express');

var router = express.Router();
var scraper = require('./scraper');
var results = require('./results');

router.route('/')
  .get(scraper);

router.route('/results')
  .get(results);

module.exports = router;
