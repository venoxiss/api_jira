/**
 * Main application routes
 */

'use strict';

var path = require('path');


module.exports = function(app) {

  // Insert routes below
  app.use('/api/Entreprises', require('./api/Entreprise'));
  app.use('/api/Tasks', require('./api/Task'));
  app.use('/api/Contacts', require('./api/Contact'));
  app.use('/api/Users', require('./api/User'));
  app.use('/api/Projects', require('./api/Project'));

  app.use('/login', require('./api/login.js') )


};
