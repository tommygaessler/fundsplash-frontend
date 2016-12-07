(function() {

  'use strict';

  angular
    .module('fundsplash.components.create', [])
    .controller('createController', createController);

  createController.$inject = ['$scope', '$http', '$auth', '$rootScope', '$interval'];

  function createController($scope, $http, $auth, $rootScope, $interval) {
    /*jshint validthis: true */

    this.sample_photos = [];

    $scope.authenticate = function() {
      $auth.authenticate('unsplash')
      .then(user => {
        $rootScope.user = user.data.data;
        $rootScope.photos = user.data.photos;
        sessionStorage.setItem('photographer_id', user.data.data.id);
      });
    };

    this.toggle = false;

    this.photos = function(photo) {

      if (this.sample_photos.includes(photo)) {
        // toggle
        this.sample_photos.splice(this.sample_photos.indexOf(photo), 1);
        photo.toggle = !photo.toggle;
      } else if (this.sample_photos.length === 3) {
        // dont toggle
        alert('only 3 photos');
      } else {
        // toggle
        this.sample_photos.push(photo);
        photo.toggle = !photo.toggle;
      }
    };

    this.campaign = function() {

      this.ends_at = parseInt(this.ends_at);

      var now = new Date();
      var ends_at = new Date();
      ends_at.setDate(now.getDate()+this.ends_at);

      const data = {
        location: this.location,
        goal: this.goal,
        description: this.description,
        photographer_id: $rootScope.user.id,
        sample_photo_1: this.sample_photos[0].urls.regular,
        sample_photo_2: this.sample_photos[1].urls.regular,
        sample_photo_3: this.sample_photos[2].urls.regular,
        ends_at: ends_at.toISOString(),
        raised: 0
      };

      $http.post('https://evening-badlands-56838.herokuapp.com/campaign', data)
      .then((created) => {

        $rootScope.created = true;

        const photographer_id = sessionStorage.getItem('photographer_id');

        // make api call to database to grab values
        $http.get(`https://evening-badlands-56838.herokuapp.com/campaign/${photographer_id}`)
        .then((campaign) => {
          $rootScope.campaign = campaign.data;
          console.log($rootScope.campaign);

          var ends_at = moment($rootScope.campaign.ends_at);
          var now = moment();
          $rootScope.campaign.countdown = countdown(ends_at, now, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS, 1).toString();

          $interval(function() {
            $rootScope.campaigns.forEach(function(campaign) {
              var ends_at = moment($rootScope.campaign.ends_at);
              var now = moment();
              $rootScope.campaign.countdown = countdown(ends_at, now, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS, 1).toString();
            });
          }, 1000);
        });
      });
    };
  }

})();
