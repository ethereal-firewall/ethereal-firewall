angular.module('followApp')
.factory('ConversationsFactory', ['$http', '$rootScope', function($http, $rootScope) {

  // Add all functions into this object
  return  {

    // Get all the Contact's conversations
    getConversations : function() {
      console.log([$rootScope.user, $rootScope.contact.id]);
      return $http({
        method: "GET",
        url: "/users/" + $rootScope.user + "/contacts/" + $rootScope.contact.id + '/conversations',
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
        url: "/users/" + $rootScope.user + "/contacts/" + $rootScope.contact.id + '/conversations',
        data: conversation,
      })
      .then(function(res) {
        return res.data;
      })
    },

  };

}]);
