// sample angular code

(function() {

  'use strict';

  angular
    .module('fundsplash', [
      'ngRoute',
      'fundsplash.config',
      'fundsplash.components.auth',
      'fundsplash.components.browse',
      'fundsplash.components.create',
      'fundsplash.components.home',
      'angularMoment'
    ]);
})();
