var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/puregympresence');

var scraper = require('./scraper');

scraper();
