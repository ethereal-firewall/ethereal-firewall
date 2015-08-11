angular.module('followApp')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    // agenda html and controller
    templateUrl: 'app/templates/agenda.html',
    controller: 'ContactsCtrl',
  })  
  .when('/signin', {
    templateUrl: 'app/templates/signin.html',
    controller: 'AuthCtrl.js',
  })
  .when('/signup', {
    templateUrl: 'app/templates/signup.html',
    controller: 'AuthCtrl.js',
  })
  .when('/contacts/:id', {
    // signin html and controller
  })
  .when('/signout', {
    // signout html and controller
  })
  .otherwise({redirectTo: '/signin'});
}]);