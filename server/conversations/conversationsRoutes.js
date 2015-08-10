var contactsController = require('./conversationsController.js');

module.exports = function(app) {
  app.route('/')
    .get(function(req, res) {console.log(req.body);})
    .post(function(req, res) {console.log(req.body);});
};