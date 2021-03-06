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
  .state('app.categorie', {
    url: '/categorie',
    views: {
      'menuContent': {
        templateUrl: 'templates/categorie.html'
      }
    }
  })
  .state('app.discutions', {
    url: '/discutions',
    views: {
      'menuContent': {
        templateUrl: 'templates/discutions.html',
        controller: 'discutionsCtrl'
      }
    }
  })
  .state('app.prive', {
    url: '/prive',
    views: {
      'menuContent': {
        templateUrl: 'templates/prive.html'
      }
    }
  })
  .state('app.favoris', {
    url: '/favoris',
    views: {
      'menuContent': {
        templateUrl: 'templates/favoris.html'
      }
    }
  })
  .state('app.parametres', {
    url: '/parametres',
    views: {
      'menuContent': {
        templateUrl: 'templates/parametres.html'
      }
    }
  })
  .state('app.apropos', {
    url: '/apropos',
    views: {
      'menuContent': {
        templateUrl: 'templates/apropos.html'
      }
    }
  })
  .state('app.discution', {
    url: '/discutions/:discutionId',
    views: {
      'menuContent': {
        templateUrl: 'templates/discution.html',
        controller: 'discutionCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/discutions');
});
