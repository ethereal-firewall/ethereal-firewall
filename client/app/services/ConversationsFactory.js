angular.module('followApp')
.factory('ConversationsFactory', ['$http', '$rootScope', function($http, $rootScope) {

  // Add all functions into this object
  return  {

    // Get all the Contact's conversations
    getConversations : function() {
      return null;
    },

    // Add a conversation to the contact
    addConversation : function(conversation) {
      return $http({
        method: "POST",
        url: "/users/" + $rootScope.user + "contacts/" + $rootScope.contact,
        data: conversation,
      })
      .then(function(res) {
        return res.data;
      })
    },

  };

}]);