'use strict';

var _ = require('lodash');
var Entreprise = require('./Entreprise.model');

// Get list of Entreprises
exports.index = function(req, res) {
  Entreprise.find(function (err, Entreprises) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(Entreprises);
  });
};

// Get a single Entreprise
exports.show = function(req, res) {
  Entreprise.findById(req.params.id, function (err, Entreprise) {
    if(err) { return handleError(res, err); }
    if(!Entreprise) { return res.status(404).send('Not Found'); }
    return res.json(Entreprise);
  });
};

// Creates a new Entreprise in the DB.
exports.create = function(req, res) {
  Entreprise.create(req.body, function(err, Entreprise) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(Entreprise);
  });
};

// Updates an existing Entreprise in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Entreprise.findById(req.params.id, function (err, Entreprise) {
    if (err) { return handleError(res, err); }
    if(!Entreprise) { return res.status(404).send('Not Found'); }
    var updated = _.merge(Entreprise, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(Entreprise);
    });
  });
};

// Deletes a Entreprise from the DB.
exports.destroy = function(req, res) {
  Entreprise.findById(req.params.id, function (err, Entreprise) {
    if(err) { return handleError(res, err); }
    if(!Entreprise) { return res.status(404).send('Not Found'); }
    Entreprise.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}