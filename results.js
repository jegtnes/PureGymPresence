var scraperjs = require('scraperjs');

var Gym = require('./models/gym');

module.exports = function(req, res) {
  Gym.findOne({
    name: 'bristol-harbourside'
  }, function(err, response) {
    if (err) {
      console.log('ruh roh');
      console.log(err);
      return res.status(500).send(err);
    }
    else {
      return res.send(response);
    }
  });
}
