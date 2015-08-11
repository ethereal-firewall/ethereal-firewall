angular.module('followApp')
.directive('contactList', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/templates/contactList.html',
  };
});