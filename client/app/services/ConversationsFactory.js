angular.module('followApp')
.factory('ConversationsFactory', ['$http', '$rootScope', function($http, $rootScope) {

  // Add all functions into this object
  return  {

    // Get all the Contact's conversations
    getConversations : function() {
      return $http({
        method: "GET",
        url: "/users/" + $rootScope.user + "/contacts/" + $rootScope.contact + '/conversations',
      })
      .then(function(res) {
        return res.data;
      })
    },

    // Add a conversation to the contact
    addConversation : function(conversation) {
      return $http({
        method: "POST",
        url: "/users/" + $rootScope.user + "/contacts/" + $rootScope.contact + '/converstations',
        data: conversation,
      })
      .then(function(res) {
        return res.data;
      })
    },

  };

}]);