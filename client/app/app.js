angular.module('followApp', ['ngMaterial', 'ngRoute'])
.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 
}])
.run(['$rootScope', '$location', 'AuthFactory', function($rootScope, $location, AuthFactory) {
  
  $rootScope.$on("$routeChangeStart", function(evt, next, current) {

    if (!AuthFactory.isAuth()) {
      $location.path('/signin');
    }

  });
}]);