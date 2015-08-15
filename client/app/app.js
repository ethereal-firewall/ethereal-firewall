angular.module('followApp', ['ngRoute', 'angularMoment'])
.controller('AppCtrl', ['$scope', '$rootScope', '$location', 'AuthFactory', function($scope, $rootScope, $location, AuthFactory){
  $scope.signout = function() {
    AuthFactory.signout()
    .then(function() {
      $rootScope.user = {};
      $location.path('/signin');
    });
  };
}])
.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|tel|sms):/);
}])
.run(['$rootScope', '$location', 'AuthFactory', function($rootScope, $location, AuthFactory) {

  $rootScope.$on("$routeChangeStart", function(evt, next, current) {

    if (next.$$route.originalPath !== '/signup' && next.$$route.originalPath !== '/signin') {
      AuthFactory.isAuth()
      .then(function(auth) {
        if (auth) {
          $rootScope.user = auth;
        }
        else {
          $rootScope.user = {};
          $location.path('/signin')
        }
      });

    }

  });
}]);