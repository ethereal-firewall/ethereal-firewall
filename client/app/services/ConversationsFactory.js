angular.module('followApp')
.factory('ConversationsFactory', ['$http', '$rootScope', function($http, $rootScope) {

  // Add all functions into this object
  return  {

    // Get all the Contact's conversations
    getConversations : function(contactId) {
      console.log("What was the user? ",$rootScope.user);
      return $http({
        method: "GET",
        url: "/users/" + $rootScope.user.id + "/contacts/" + contactId + '/conversations',
      })
      .then(function(res) {
        console.log(res.data);
        return res.data;
      })
    },

    // Add a conversation to the contact
    addConversation : function(conversation) {
      return $http({
        method: "POST",
        url: "/users/" + $rootScope.user.id + "/contacts/" + conversation.contactId + '/conversations',
        data: conversation,
      })
      .then(function(res) {
        return res.data;
      })
    },

  };

}]);
