angular.module('followApp')

.controller('ConversationsCtrl', ['$scope', '$rootScope', 'ConversationsFactory', function($scope, $rootScope, ConversationsFactory) {

  $scope.data = {};
  $scope.data.conversations = [];

  $scope.addConversation = function() {
    ConversationsFactory.addConversation($scope.conversation)
    .then(function() {

    });
  };

  $scope.getConversations = function() {
    ConverstaionsFactory.getConversations()
    .then(function(conversations) {
      $scope.data.conversations = conversations; 
    });
  };
  
}]);