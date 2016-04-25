
/**
 * Sets the homepage controller
 * @function
 */
// This is an IIFE to minimalize global carry over of items.
(function () {
  'use strict';

  angular.module('app.modules.homepage')
    .controller('homepageCtrl', homepageCtrl);

  //dashboardCtrl.$inject = [];

  /**
   * Controller logic for homepage sets value for patient list display (true or false)
   * @function homepageCtrl
   * @param {object} $scope - application scope
   */
  function homepageCtrl() {

    /* jshint validthis: true */
    var vm = this;
  }//homepageCtrl

})(); // end IIFE
