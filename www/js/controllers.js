angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ProfileCtrl', function($scope) {
    $scope.pageTitle = "Profile";
})

.controller('ShopInfoCtrl', function($scope, $ionicLoading, $compile) {
    $scope.pageTitle = "Shop Information";
    $scope.showLoader = true;

    navigator.geolocation.getCurrentPosition(function(position){
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;

        var map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 41.85,
                lng: -87.65
            },
            zoom: 10
        });

        directionsDisplay.setMap(map);

        directionsService.route({
            origin: '12.841562900000001, 80.1516518',
            destination: '133 Bajanai Koil St Melmanagar, Poonamallee, Chennai, Tamil Nadu 600056',
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
        }, function(response, status) {
            if (status === 'OK') {
                $scope.showLoader = false;
                console.log(response.routes[0].legs);
                console.log(status);
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    });
})

.controller('ViewMapCtrl', function($scope, $ionicLoading, $compile, $window) {

    $scope.pageTitle = "Map";
    $scope.showLoader = true;

    var refresh = function() {
        navigator.geolocation.getCurrentPosition(function(position){
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;

            var map = new google.maps.Map(document.getElementById('fullMapView'), {
                center: {
                    lat: 41.85,
                    lng: -87.65
                },
                zoom: 10
            });

            directionsDisplay.setMap(map);

            directionsService.route({
                origin: '12.841562900000001, 80.1516518',
                destination: '133 Bajanai Koil St Melmanagar, Poonamallee, Chennai, Tamil Nadu 600056',
                optimizeWaypoints: true,
                travelMode: 'DRIVING'
            }, function(response, status) {
                if (status === 'OK') {
                    $scope.showLoader = false;
                    console.log(response.routes[0].legs);
                    console.log(status);
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        });
    }

    refresh();

})

.controller('HomeCtrl', function($scope) {
    $scope.pageTitle = "Home";
})

.controller('MyStoreCtrl', function($scope) {
    $scope.pageTitle = "My Store";
});
