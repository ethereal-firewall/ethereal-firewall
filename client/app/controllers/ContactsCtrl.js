angular.module('followApp')

.controller('ContactsCtrl', ['$scope', '$rootScope', '$location', 'ContactsFactory', function($scope, $rootScope, $location, ContactsFactory) {

  $scope.data = {};
  $scope.data.contacts = [];
  $rootScope.user = 3;

  $scope.getContacts = function() {
    ContactsFactory.getContacts()
    .then(function(contacts) {

      // current time as date and in milliseconds:
      var currentDate = new Date();
      var currentMSDate = Date.now();
      // set difference between now and contact due date on each contact
      contacts.forEach(function(contact) {
        nextDate = Date.parse(contact.nextDate);
        contact.due = $scope.timeToContact(nextDate, currentDate, currentMSDate);
      });

      $scope.data.contacts = contacts;
    });
  };

  $scope.addContact = function() {
    $scope.contact.UserId = $rootScope.user;
    ContactsFactory.addContact($scope.contact)
    .then(function(contact) {
      console.log("created new contact ", contact);
      $rootScope.contact = contact;
      $location.path('/contact/' + contact.id);
    });
  }

  $scope.navigateTo = function(contact) {
    console.log(contact);
    $rootScope.contact = contact;
    $location.path('/contact/' + contact.id);
  }

  $scope.getContacts();

  $scope.timeToContact = function(nextDate, currentDate, currentMSDate) {
    // calculate current time in UTC
    var now = currentMSDate - currentDate.getTimezoneOffset() * 60000;
    // subtract now from current date
    var dueDate = Math.floor((nextDate - now) / 86400000);
    // return due date
    return dueDate;
  };

}]);


