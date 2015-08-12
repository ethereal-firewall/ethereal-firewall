angular.module('followApp')

.controller('ConversationsCtrl', ['$scope', '$rootScope', '$routeParams', 'ConversationsFactory', function($scope, $rootScope, $routeParams, ConversationsFactory) {

  $scope.data = {};
  $scope.data.conversations = [];
  $rootScope.user = 3;

  $scope.addConversation = function() {
    $scope.conversation.contactId = $rootScope.contact.id;
    ConversationsFactory.addConversation($scope.conversation)
    .then(function(conversation) {
      console.log(conversation);
    });
  };

  $scope.toggleConversationForm = function () {
    $scope.showAddConversation = !$scope.showAddConversation;
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