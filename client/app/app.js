angular.module('followApp', ['ngRoute'])
.controller('AppCtrl', ['$scope', function($scope){
 
}])
.run(['$rootScope', '$location', "AuthFactory", function($rootScope, $location, AuthFactory) {
  
  $rootScope.$on("$routeChangeStart", function(evt, next, current) {

    if (!AuthFactory.isAuth()) {
      $location.path('/signin');
    }

  });
}]);