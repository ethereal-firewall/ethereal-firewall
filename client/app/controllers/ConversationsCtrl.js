angular.module('followApp')

.controller('ConversationsCtrl', ['$scope', '$rootScope', 'ConversationsFactory', function($scope, $rootScope, ConversationsFactory) {

  $scope.data = {};
  $scope.data.conversations = [];
  $rootScope.user = 3;

  $scope.addConversation = function() {
    ConversationsFactory.addConversation($scope.conversation)
    .then(function() {

    });
  };

  $scope.getConversations = function() {
    ConversationsFactory.getConversations()
    .then(function(conversations) {
      console.log("Conversations: ", conversations);
      $scope.data.conversations = conversations; 
    });
  };

  $scope.getConversations();
  
}]);