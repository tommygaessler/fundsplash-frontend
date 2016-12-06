(function() {

  'use strict';

  angular
    .module('fundsplash.components.browse', [])
    .controller('browseController', browseController);

  browseController.$inject = ['$scope', '$http', '$rootScope'];

  function browseController($scope, $http, $rootScope) {
    /*jshint validthis: true */

    // $rootScope.status = 'active';

    $http.get('http://localhost:3000/campaigns')
    .then((campaigns) => {
      $rootScope.campaigns = campaigns.data;
    });

    var handler = StripeCheckout.configure({
      key: 'pk_test_azE802fthc69BcEpUKGLJx6W'
    });

    this.stripe = function(campaign) {

      handler.open({
        name: `${campaign.first_name}'s`,
        description: `trip to ${campaign.location}`,
        amount: 2000,
        image: campaign.profile_image,
        locale: 'false',
        token: function(token) {
          // send post request to server and send confirmation email
          console.log(token);
          console.log(campaign);

          const data = {
            token: token,
            campaign: campaign
          }

          $http.post('http://localhost:3000/stripe', data)
          .then((data) => {
            console.log(data);
            campaign.raised = data.data.balance;
          });
        }
      });
    }
  }

})();
