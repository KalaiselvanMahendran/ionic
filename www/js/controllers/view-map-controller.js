app.controller('ViewMapCtrl', function($scope, $ionicLoading, $compile) {

    $scope.pageTitle = "Map";

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
                console.log(response.routes[0].legs);
                console.log(status);
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    });

})
