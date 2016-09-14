'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: String,
  category: String,
  user: {type: Number, unique: true},
  project: {type: Number, unique: true},
  priority: Number,
  status: Number,
  startDate: Number,
  endDate: Number,
  estimateEndDate: Number,
  creationDate: Number,
  description : String,
  report: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);
