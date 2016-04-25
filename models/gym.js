var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var presenceSchema = new Schema({
  timestamp: Date,
  people: Number
});
var gymSchema = new Schema({
  name: String,
  presence: [presenceSchema]
});

module.exports = mongoose.model('Gym', gymSchema);
