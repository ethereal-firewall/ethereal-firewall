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
    controller: 'AuthCtrl',
  })
  .when('/signup', {
    templateUrl: 'app/templates/signup.html',
    controller: 'AuthCtrl',
  })
  .when('/contact/:id', {
    // signin html and controller
    templateUrl: 'app/templates/contact.html',
    controller: 'ConversationsCtrl',
  })
  .when('/signout', {
    // signout html and controller
  })
  .otherwise({redirectTo: '/signin'});
}]);