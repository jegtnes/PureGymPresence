var scraperjs = require('scraperjs');

var Gym = require('./models/gym');

module.exports = function(req, res) {
  scraperjs.StaticScraper.create('http://www.puregym.com/gyms/bristol-harbourside/whats-happening/')
    .scrape(function($) {
      return $(".people-number").map(function() {
        return parseInt($(this).text(), 10);
      }).get();
    })
    .then(function(number) {
      Gym.findOne({
        name: 'bristol-harbourside'
      }, function(err, response) {
        if (err) {
          console.log('ruh roh');
          console.log(err);
        }
        else {
          var census = {timestamp: Date.now(), people: number[0]};
          response.presence.push(census);

          response.save(function(err) {
            if (err) {
              console.log('shitehawk');
              console.log(err);
              return res.status(500).send(err);
            }
            else {
              console.log(number[0]);
              return res.send({patrons: number[0]});
            }
          })
        }
      });
    });
}
