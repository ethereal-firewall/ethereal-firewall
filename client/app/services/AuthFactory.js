angular.module('followApp')
.factory('AuthFactory', ['$http', '$rootScope', function($http, $rootScope) {

  // Signin
  return {

    // Signin
    signin : function(user) {
      return $http({
        method: "POST",
        url: "/users/signin",
        data: user,
      })
      .then(function(res) {
        return res.data;
      });
    },

    // Signup
    signup : function(user) {
      return $http({
        method: "POST",
        url: "/users/signup",
        data: user,
      })
      .then(function(res) {
        return res.data;
      });
    },

    // Signout
    signout : function() {
      return $http({
        method: "GET",
        url: "/users/signout",
      })
      .then(function(res) {
        return res.data;
      })
    },

    isAuth : function() {
      return $http({
        method: "GET",
        url: "/users/signedin"
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(res) {
        return null;
      })
    },

  };

}]);