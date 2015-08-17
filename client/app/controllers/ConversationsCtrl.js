angular.module('followApp')

.controller('ConversationsCtrl', ['$scope', '$rootScope', '$window', '$routeParams', 'ConversationsFactory', 'ContactsFactory',
  function($scope, $rootScope, $window, $routeParams, ConversationsFactory, ContactsFactory) {

  $scope.data = {};
  $scope.data.conversations = [];
  $scope.conversation = {};

  /* Called when a user adds a conversation. The date and time provided 
  by the Add Conversation form are in different time zones. This function normalizes the 
  date/time to a format that is understood by the database and the rest of the app. */
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

  /* Called when a user clicks on one of the the icons on the contact view. 
  Redirects the user to the appropriate link to initiate an e-mail, phone call, or SMS 
  and opens up the Add Conversation form in our app. */
  $scope.initiateConversation = function (mediumId) {
    var prefixes = ['mailto:', 'tel:', 'sms:'];
    var contactMethod = ['email', 'phone', 'phone'];
    contactMethod = contactMethod[mediumId];
    var address = prefixes[mediumId] + $scope.contact[contactMethod];
    $window.open(address);
    $scope.toggleConversationForm();
  };

  /* Called when a user submits the Add Conversation form. Adds some data 
  to the form, sends the request to the database, and if successful, adds the new conversation 
  to the list of conversations to be rendered in the Conversation List view. */
  $scope.addConversation = function() {
    $scope.conversation.ContactId = $scope.contact.id;
    $scope.conversation.dateTime = $scope.convertDateTime($scope.conversation.date, $scope.conversation.time);
    ConversationsFactory.addConversation($scope.conversation)
    .then(function(conversation) {
      $scope.data.conversations.push(conversation);
      $scope.updateNextDate()
      $scope.conversation = {};
      $scope.toggleConversationForm();
    });
  };

  /* Toggles the Add Conversation form and populates the form with the current 
  date and time. */
  $scope.toggleConversationForm = function () {
    $scope.showAddConversation = !$scope.showAddConversation;
    var date = new Date();
    var time = new Date(1970, 0, 1, date.getHours(), date.getMinutes());
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    $scope.conversation.date = date;
    $scope.conversation.time = time;
  };

  /* Called whenever the Contact view is loaded. Retrieves the list of conversations 
  with the current contact from the database to be rendered in the Conversation List. */
  $scope.getConversations = function() {
    ConversationsFactory.getConversations($routeParams.id)
    .then(function(conversations) {
      $scope.data.conversations = conversations.length > 0 ? conversations : null;
    });
  };

  /* Called whenever the Contact view is loaded. Retrieves data about the contact 
  from the database and stores it on the scope to be used later. */
  $scope.getContact = function() {
    ContactsFactory.getContact($routeParams.id)
    .then(function(contact) {
      $scope.contact = contact;
    });
  };

  /* Called when a new conversation is successfully added to the database. Extends the 
  nextDate field for the contact to the date of the recently added conversation plus the interval. */
  $scope.updateNextDate = function() {
    var curr = Date.parse($scope.conversation.dateTime);
    var offset = (new Date(curr)).getTimezoneOffset() * 60000;
    var interval = $scope.contact.interval * 86400000;
    var nextDate = (new Date(curr + interval - offset)).toISOString();
    return ContactsFactory.setContact($scope.contact.id, {nextDate:nextDate})
    .then(function(contact) {
      return contact;
    });
  };

  /* Called when the Contact view loads. This provides a list of mediums with which
  the user can create a conversation with a contact. Used to populate dropdown in the 
  Add Conversation view. */
  $scope.getMediums = function () {
    ConversationsFactory.getMediums()
    .then(function (mediums) {
      $scope.mediums = mediums;
    });
  };

  $scope.getContact();
  $scope.getConversations();
  $scope.getMediums();
  
}]);
