'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  password: String,
  photo: String,
  fonction: String,
  grant: String,
  projects: Array,
  tasks: Array,
  droit: String,
  hourlyRate: String,
  info: String
});

module.exports = mongoose.model('User', UserSchema);