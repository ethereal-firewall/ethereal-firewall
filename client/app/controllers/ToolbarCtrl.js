angular.module('followApp')

.controller('ToolbarCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.addContact = function() {
    console.log('add contact clicked');
  };

  $scope.searchfocus = function() {
    console.log('search has focus...');
  }

  $scope.searchblur = function() {
    console.log('search lost focus...');
  }
}])