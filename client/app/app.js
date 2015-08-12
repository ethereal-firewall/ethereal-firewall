angular.module('followApp', ['ngRoute', 'angularMoment'])
.controller('AppCtrl', ['$scope', function($scope){
 
}])
// .run(['$rootScope', '$location', 'AuthFactory', function($rootScope, $location, AuthFactory) {
  
//   $rootScope.$on("$routeChangeStart", function(evt, next, current) {

//     if (next.$$route.originalPath !== "/signup" && !AuthFactory.isAuth()) {
//       console.log(next);
//       $location.path('/signin');
//     }

//   });
// }]);