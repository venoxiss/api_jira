'use strict';

var _ = require('lodash');
var Project = require('./Project.model');

// Get list of Projects
exports.index = function(req, res) {
  Project.find(function (err, Projects) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(Projects);
  });
};

// Get a single Project
exports.show = function(req, res) {
  Project.findById(req.params.id, function (err, Project) {
    if(err) { return handleError(res, err); }
    if(!Project) { return res.status(404).send('Not Found'); }
    return res.json(Project);
  });
};

// Creates a new Project in the DB.
exports.create = function(req, res) {
  Project.create(req.body, function(err, Project) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(Project);
  });
};

// Updates an existing Project in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Project.findById(req.params.id, function (err, Project) {
    if (err) { return handleError(res, err); }
    if(!Project) { return res.status(404).send('Not Found'); }
    var updated = _.merge(Project, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(Project);
    });
  });
};

// Deletes a Project from the DB.
exports.destroy = function(req, res) {
  Project.findById(req.params.id, function (err, Project) {
    if(err) { return handleError(res, err); }
    if(!Project) { return res.status(404).send('Not Found'); }
    Project.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}