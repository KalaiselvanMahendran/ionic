// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  // home
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  // Login
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        // controller: 'LoginCtrl'
      }
    }
  })

  // Signup
  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
        // controller: 'SignupCtrl'
      }
    }
  })
  // near-by-you
  .state('app.nearByYou', {
    url: '/near-by-you',
    views: {
      'menuContent': {
        templateUrl: 'templates/near-by-you-list.html',
        // controller: 'NearByYouCtrl'
      }
    }
  })

  // shop-info
  .state('app.shopInfo', {
    url: '/near-by-you/:shopId',
    views: {
      'menuContent': {
        templateUrl: 'templates/shop-info.html',
        controller: 'ShopInfoCtrl'
      }
    }
  })

  // view-map
  .state('app.viewMap', {
      url: '/view-map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'ViewMapCtrl'
        }
      }
    })

    // profile
  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('app.mystore', {
        url: '/my-store',
        views: {
          'menuContent': {
            templateUrl: 'templates/my-store.html',
            controller: 'MyStoreCtrl'
          }
        }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
