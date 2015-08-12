angular.module('followApp')

.controller('AuthCtrl', ['$scope', '$rootScope', '$location', 'AuthFactory', function($scope, $rootScope, $location, AuthFactory) {

  //$rootScope.user = 3;

  $scope.signup = function() {
    AuthFactory.signup($scope.user)
    .then(function(user) {
      $rootScope.user = user;
      $location.path('/');
    });
  };

  $scope.signin = function() {
    AuthFactory.signin($scope.user)
    .then(function(user) {
      $rootScope.user = user;
      $location.path('/');
    });
  };

  $scope.signout = function() {
    AuthFactory.signout()
    .then(function() {
      $rootScope.user = {};
      $location.path('/signin');
    });
  };
  
}]);