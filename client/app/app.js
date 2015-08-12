angular.module('followApp', ['ngRoute', 'angularMoment'])
.controller('AppCtrl', ['$scope', function($scope){
 
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