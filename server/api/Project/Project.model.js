'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  status: Number,
  businesStatus: String,
  version: String,
  tasks: Array,
  reports: Array,
  doc: Array,
  client : {type: Number, unique: true},
  contactTech : {type: Number, unique: true},
  contactCom : {type: Number, unique: true},
  deadline: Number,
  info: String,
  developpeurs: Array
});

module.exports = mongoose.model('Project', ProjectSchema);
