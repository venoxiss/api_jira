'use strict';

var _ = require('lodash');
var Contact = require('./Contact.model');

// Get list of Contacts
exports.index = function(req, res) {
  Contact.find(function (err, Contacts) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(Contacts);
  });
};

// Get a single Contact
exports.show = function(req, res) {
  Contact.findById(req.params.id, function (err, Contact) {
    if(err) { return handleError(res, err); }
    if(!Contact) { return res.status(404).send('Not Found'); }
    return res.json(Contact);
  });
};

// Creates a new Contact in the DB.
exports.create = function(req, res) {
  Contact.create(req.body, function(err, Contact) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(Contact);
  });
};

// Updates an existing Contact in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Contact.findById(req.params.id, function (err, Contact) {
    if (err) { return handleError(res, err); }
    if(!Contact) { return res.status(404).send('Not Found'); }
    var updated = _.merge(Contact, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(Contact);
    });
  });
};

// Deletes a Contact from the DB.
exports.destroy = function(req, res) {
  Contact.findById(req.params.id, function (err, Contact) {
    if(err) { return handleError(res, err); }
    if(!Contact) { return res.status(404).send('Not Found'); }
    Contact.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}