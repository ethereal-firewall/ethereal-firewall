angular.module('followApp')

.controller('ContactsCtrl', ['$scope', 'ContactsFactory', function($scope, ContactsFactory) {

  $scope.data = {};
  $scope.data.contacts = [];

  $scope.getContacts = function() {
    ContactsFactory.getContacts()
    .then(function(contacts) {
      console.log(contacts);

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


