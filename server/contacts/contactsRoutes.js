var contactsController = require('./contactsController.js');

module.exports = function(app) {

  app.route('/:contactId')
    .get(function(req, res) {console.log(req.body);})
    .put(function(req, res) {console.log(req.params);});

  app.route("/")
    .get(function(req, res) {console.log(req.body);})
    .post(function(req, res) {console.log(req.userId);});
};