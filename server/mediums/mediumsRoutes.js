var mediumsController = require('./mediumsController.js');

module.exports = function(app) {
  app.get('/', mediumsController.getMediums); 
};