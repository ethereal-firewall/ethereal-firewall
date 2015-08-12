// addConversation.js

angular.module('followApp')
.directive('addConversation', function () {
  return {
    restrict: 'E',
    template: 'app/templates/addCoversation.html'
  };
});
