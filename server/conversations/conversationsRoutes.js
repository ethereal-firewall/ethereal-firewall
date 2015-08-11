var conversationsController = require('./conversationsController.js');

module.exports = function(app) {
  app.route('/')
    .get(conversationsController.getAllConversations)
    .post(conversationsController.addConversation);
};