'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  info: String,
  entreprise: {type: Number, unique: true},  
  fonction: String,
});

module.exports = mongoose.model('Contact', ContactSchema);