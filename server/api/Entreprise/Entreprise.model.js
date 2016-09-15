'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EntrepriseSchema = new Schema({
  name: String,
  logo: String,
  adresse: String,
  siret: String,
  projects: Array,
  category: String,
  info: String
});

module.exports = mongoose.model('Entreprise', EntrepriseSchema);