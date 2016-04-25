
/**
 * Sets the dashboard controller
 * @function
 */
// This is an IIFE to minimalize global carry over of items.
(function () {
  'use strict';

  angular.module('app.modules.homepage')
    .controller('homepageCtrl', homepageCtrl);

  //dashboardCtrl.$inject = [];

  /**
   * Controller logic for dashboard sets value for patient list display (true or false)
   * @function dashboardCtrl
   * @param {object} $scope - application scope
   */
  function homepageCtrl() {

    /* jshint validthis: true */
    var vm = this;
  }//homepageCtrl

})(); // end IIFE