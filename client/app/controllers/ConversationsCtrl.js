angular.module('followApp')

.controller('ConversationsCtrl', ['$scope', '$rootScope', '$routeParams', 'ConversationsFactory', 'ContactsFactory', 
  function($scope, $rootScope, $routeParams, ConversationsFactory, ContactsFactory) {

  $scope.data = {};
  $scope.data.conversations = [];
  $scope.conversation = {};

  $scope.convertDateTime = function (date, time) {
    date = new Date(date);
    time = new Date(time);
    date = Date.parse(date) - date.getTimezoneOffset() * 60000;
    time = Date.parse(time) - time.getTimezoneOffset() * 60000;
    var dateTime = date + time;
    dateTime += (new Date()).getTimezoneOffset() * 60000;
    dateTime = new Date(dateTime);
    return dateTime.toISOString();
  };

  $scope.addConversation = function() {
    $scope.conversation.ContactId = $scope.contact.id;
    $scope.conversation.dateTime = $scope.convertDateTime($scope.conversation.date, $scope.conversation.time);
    ConversationsFactory.addConversation($scope.conversation)
    .then(function(conversation) {
      $scope.data.conversations.push(conversation);
      $scope.updateNextDate()
      .then(function(contact) {
        $scope.conversation = {};
        $scope.toggleConversationForm();
      });
    });
  };

  $scope.toggleConversationForm = function () {
    $scope.showAddConversation = !$scope.showAddConversation;
    var date = new Date();
    var time = new Date(1970, 0, 1, date.getHours(), date.getMinutes());
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    $scope.conversation.date = date;
    $scope.conversation.time = time;
  };

  $scope.getConversations = function() {
    console.log("Here was the user ", $rootScope.user);
    console.log($routeParams.id);
    ConversationsFactory.getConversations($routeParams.id)
    .then(function(conversations) {
      console.log("Conversations: ", conversations);
      $scope.data.conversations = conversations.length > 0 ? conversations : null;
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
