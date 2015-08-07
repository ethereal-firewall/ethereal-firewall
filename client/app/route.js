angular.module('followApp.route', [])
.config(function($routeProvider) {
  $routeProvider
  .when('/signup', {
    // signup html and controller
  })  
  .when('/signin', {
    // signin html and controller
  })
  .when('/', {
    // agenda html and controller
  })
  .when('/contacts/:id', {
    // signin html and controller
  })
  .when('/signout', {
    // signout html and controller
  })
  .otherwise({redirectTo: '/signin'});
})