angular.module('followApp')
.directive('conversationList', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/templates/conversationList.html',
  };
});
