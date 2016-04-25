/**
 * Application Config
 * @function
 */
// This is an IIFE to minimalize global carry over of items.
(function () {

  'use strict';

  // Assign Routes to app module.
  angular
    .module('app')
    .config(['$routeProvider',
      /**
       * Routes the user to the appropriate location
       * @function
       * @param {service} $routeProvider - puts together appropriate URL.
       */
      function ($routeProvider) {
        $routeProvider
          .when('/home', {
            templateUrl:'app/modules/homepage/test_part.html',
            controller: 'homepageCtrl',
            controllerAs: 'vm'
          })
          .otherwise({
            redirectTo: '/home',
            controller: 'homepageCtrl',
            controllerAs: 'vm'
          });
      }
    ]);

})(); // end IIFE