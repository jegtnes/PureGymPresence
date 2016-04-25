var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/puregympresence');
var Gym = require('./models/gym');

var newGym = new Gym({'name': 'bristol-harbourside'});

console.log(newGym);

return newGym.save(function(err) {
  if (err) {
    console.log('shite', err);
  }
});
