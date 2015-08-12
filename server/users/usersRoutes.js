var usersController = require('./usersController.js');

module.exports = function(app) {
  app.post('/signup', usersController.signup); 
  app.post('/signin', usersController.signin); 
  app.get('/signedin', users.Controller.checkSignedIn);
};