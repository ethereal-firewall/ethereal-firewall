angular.module('followApp')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    // signup html and controller
  })  
  .when('/signin', {
    // signin html and controller
  })
  .when('/signup', {
    // agenda html and controller
  })
  .when('/contacts/:id', {
    // signin html and controller
  })
  .when('/signout', {
    // signout html and controller
  })
  .otherwise({redirectTo: '/signin'});
}]);