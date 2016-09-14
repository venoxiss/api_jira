'use strict';

var _ = require('lodash');
var Task = require('./Task.model');

// Get list of Tasks
exports.index = function(req, res) {
  Task.find(function (err, Tasks) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(Tasks);
  });
};

// Get a single Task
exports.show = function(req, res) {
  Task.findById(req.params.id, function (err, Task) {
    if(err) { return handleError(res, err); }
    if(!Task) { return res.status(404).send('Not Found'); }
    return res.json(Task);
  });
};

// Creates a new Task in the DB.
exports.create = function(req, res) {
  Task.create(req.body, function(err, Task) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(Task);
  });
};

// Updates an existing Task in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Task.findById(req.params.id, function (err, Task) {
    if (err) { return handleError(res, err); }
    if(!Task) { return res.status(404).send('Not Found'); }
    var updated = _.merge(Task, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(Task);
    });
  });
};

// Deletes a Task from the DB.
exports.destroy = function(req, res) {
  Task.findById(req.params.id, function (err, Task) {
    if(err) { return handleError(res, err); }
    if(!Task) { return res.status(404).send('Not Found'); }
    Task.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}