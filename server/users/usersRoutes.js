var usersController = require('./usersController.js');

module.exports = function(app) {
  app.post('/signup', function(req, res) {console.log(req.body.user);}); // add signup handler here
  app.post('/signin', function(req, res) {console.log(req.body.user);}); // add signin handler here

};