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
        $rootScope.user = user.data.data;
        $rootScope.photos = user.data.photos;
      });
    };

    this.campaign = function() {

      const data = {
        location: this.location,
        goal: this.goal,
        description: this.description,
        photographer_id: $rootScope.user.id
      }

      console.log(data);

      $http.post('http://localhost:3000/campaign', data)
      .then((data) => {
        console.log(data);
      });
    }
  }

  window.addEventListener('popstate', function() {
    handler.close();
  });

})();
