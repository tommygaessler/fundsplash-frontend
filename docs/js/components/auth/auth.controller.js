(function() {

  'use strict';

  angular
    .module('fundsplash.components.auth', [])
    .controller('authController', authController);

  authController.$inject = ['$scope', '$http'];

  function authController($scope, $http) {
    /*jshint validthis: true */

    $http.get('http://localhost:3000/profile')
    .then((profile) => {
      console.log(profile);
    })
    .catch((error) => {
      console.log(error);
    });
  }

})();
