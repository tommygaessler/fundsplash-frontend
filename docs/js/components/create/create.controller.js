(function() {

  'use strict';

  angular
    .module('fundsplash.components.create', [])
    .controller('createController', createController);

  createController.$inject = ['$scope', '$http', '$auth', '$rootScope'];

  function createController($scope, $http, $auth, $rootScope) {
    /*jshint validthis: true */

    $scope.authenticate = function() {
      $auth.authenticate('unsplash')
      .then(user => {
        console.log(user.data);
        sessionStorage.setItem('token', user.data.token);
        $rootScope.user = user.data.data;
      });
    };
  }

})();
