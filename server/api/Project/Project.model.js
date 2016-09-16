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
  client : String,
  contactTech :String,
  contactCom : String,
  deadline: Number,
  info: { type: String, default: 'les info' },
  developpeurs: Array
});

module.exports = mongoose.model('Project', ProjectSchema);
