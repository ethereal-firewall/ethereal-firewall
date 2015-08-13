angular.module('followApp')

.controller('ConversationsCtrl', ['$scope', '$rootScope', '$routeParams', 'ConversationsFactory', 'ContactsFactory', 
  function($scope, $rootScope, $routeParams, ConversationsFactory, ContactsFactory) {

  $scope.data = {};
  $scope.data.conversations = [];
  //$scope.contact = $rootScope.contact;
  //$rootScope.user = 3;

  $scope.addConversation = function() {

    console.log('inside addConversation ', $scope.conversation.date.toISOString());
    $scope.conversation.ContactId = $scope.contact.id;
    $scope.conversation.dateTime = $scope.conversation.date.toISOString();

    ConversationsFactory.addConversation($scope.conversation)
    .then(function(conversation) {
      $scope.data.conversations.push(conversation);
      $scope.updateNextDate()
      .then(function(contact) {
        console.log(contact);
        $scope.conversation = {};
        $scope.toggleConversationForm();
      });
    });
  };

  $scope.toggleConversationForm = function () {
    $scope.showAddConversation = !$scope.showAddConversation;
  };

  $scope.getConversations = function() {
    console.log("Here was the user ", $rootScope.user);
    console.log($routeParams.id);
    ConversationsFactory.getConversations($routeParams.id)
    .then(function(conversations) {
      console.log("Conversations: ", conversations);
      $scope.data.conversations = conversations; 
    });
  };

  $scope.getContact = function() {
    ContactsFactory.getContact($routeParams.id)
    .then(function(contact) {
      $scope.contact = contact;
    });
  };

  $scope.updateNextDate = function() {
    var curr = Date.parse($scope.conversation.dateTime);
    var offset = (new Date(curr)).getTimezoneOffset() * 60000;
    var interval = $scope.contact.interval * 86400000;
    var nextDate = (new Date(curr + interval - offset)).toISOString();
    console.log("NextDate is ", nextDate);
    return ContactsFactory.setContact($scope.contact.id, {nextDate:nextDate})
    .then(function(contact) {
      return contact;
    });
  };



  $scope.getContact();
  $scope.getConversations();
  
}]);