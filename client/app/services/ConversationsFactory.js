Angular.module('followApp.ConversationsFactory', [])
.factory('Conversations', function($http) {
  var getConversations = function() {
    return null;
  };

  var addConversation = function() {
    return null;
  };

  return {
    getConversations: getConversations,
    addConversation: addConversation,
  }
})