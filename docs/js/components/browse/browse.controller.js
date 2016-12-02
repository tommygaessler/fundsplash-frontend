(function() {

  'use strict';

  angular
    .module('fundsplash.components.browse', [])
    .controller('browseController', browseController);

  browseController.$inject = ['$scope', '$http', '$rootScope'];

  function browseController($scope, $http, $rootScope) {
    /*jshint validthis: true */

    $rootScope.status = 'active';

    $http.get('http://localhost:3000/campaigns')
    .then((campaigns) => {
      $rootScope.campaigns = campaigns.data;
    });
  }

})();
