angular.module('followApp')

.controller('AuthCtrl', ['$scope', '$rootScope', '$location', 'AuthFactory', function($scope, $rootScope, $location, AuthFactory) {

  $rootScope.user = -1;

  $scope.signin = function() {
    AuthFactory.signin($scope.user)
    .then(function(user) {
      $rootScope.user = user.id;
      $location.path('/');
    });
  };
  
}]);