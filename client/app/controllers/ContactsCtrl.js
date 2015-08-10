angular.module('followApp')

.controller('ContactsCtrl', ['$scope', 'ContactsFactory', function($scope, ContactsFactory) {

  $scope.data = {};
  $scope.data.contacts = [];

  $scope.getContacts = function() {
    ContactsFactory.getContacts()
    .then(function(contacts) {
      console.log(contacts);
      $scope.data.contacts = contacts;
    });
  };

  $scope.getContacts();

}]);