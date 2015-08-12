angular.module('followApp')

.controller('ConversationsCtrl', ['$scope', '$rootScope', '$routeParams', 'ConversationsFactory', function($scope, $rootScope, $routeParams, ConversationsFactory) {

  $scope.data = {};
  $scope.data.conversations = [];
  //$rootScope.user = 3;

  $scope.addConversation = function() {
    ConversationsFactory.addConversation($scope.conversation)
    .then(function() {

    });
  };

  $scope.getConversations = function() {
    console.log($routeParams.id);
    ConversationsFactory.getConversations($routeParams.id)
    .then(function(conversations) {
      console.log("Conversations: ", conversations);
      $scope.data.conversations = conversations; 
    });
  };

  $scope.getConversations();
  
}]);