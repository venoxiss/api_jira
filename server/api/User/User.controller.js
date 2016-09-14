'use strict';

var _ = require('lodash');
var User = require('./User.model');

// Get list of Users
exports.index = function(req, res) {
  User.find(function (err, Users) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(Users);
  });
};

// Get a single User
exports.show = function(req, res) {
  User.findById(req.params.id, function (err, User) {
    if(err) { return handleError(res, err); }
    if(!User) { return res.status(404).send('Not Found'); }
    return res.json(User);
  });
};

// Creates a new User in the DB.
exports.create = function(req, res) {
  User.create(req.body, function(err, User) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(User);
  });
};

// Updates an existing User in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  User.findById(req.params.id, function (err, User) {
    if (err) { return handleError(res, err); }
    if(!User) { return res.status(404).send('Not Found'); }
    var updated = _.merge(User, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(User);
    });
  });
};

// Deletes a User from the DB.
exports.destroy = function(req, res) {
  User.findById(req.params.id, function (err, User) {
    if(err) { return handleError(res, err); }
    if(!User) { return res.status(404).send('Not Found'); }
    User.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}