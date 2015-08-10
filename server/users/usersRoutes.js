var usersController = require('./usersController.js');

module.exports = function(app) {
  app.post('/signup', function(req, res) {console.log(req);}); // add signup handler here
  app.post('/signin', function(req, res) {console.log(req);}); // add signin handler here

};