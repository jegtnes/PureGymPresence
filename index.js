var express =      require('express');
var bodyParser =   require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/puregympresence');

var scraper = require('./scraper');
var router = require('./router');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/", router);

app.listen(3210);

scraper();
