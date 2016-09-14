/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Entreprise = require('../api/Entreprise/Entreprise.model');
var Task = require('../api/Task/Task.model');
var Contact = require('../api/Contact/Contact.model');
var User = require('../api/User/User.model');
var Project = require('../api/Project/Project.model');


// Insert seed data below
var EntrepriseSeed = require('../api/Entreprise/Entreprise.seed.json');
var TaskSeed = require('../api/Task/Task.seed.json');
var ContactSeed = require('../api/Contact/Contact.seed.json');
var UserSeed = require('../api/User/User.seed.json');
var ProjectSeed = require('../api/Project/Project.seed.json');

// Insert seed inserts below
Entreprise.find({}).remove(function() {
	Entreprise.create(EntrepriseSeed);
});

Task.find({}).remove(function() {
	Task.create(TaskSeed);
});

Contact.find({}).remove(function() {
	Contact.create(ContactSeed);
});

User.find({}).remove(function() {
	User.create(UserSeed);
});

Project.find({}).remove(function() {
	Project.create(ProjectSeed);
});
