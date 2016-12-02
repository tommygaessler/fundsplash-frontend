(function() {

  'use strict';

  angular
    .module('fundsplash.components.create', [])
    .controller('createController', createController);

  createController.$inject = ['$scope', '$http', '$auth'];

  function createController($scope, $http, $auth) {
    /*jshint validthis: true */

    $scope.authenticate = function() {
      $auth.authenticate('unsplash').then(result => {
        console.log(result)
      })
    }
  }

})();
