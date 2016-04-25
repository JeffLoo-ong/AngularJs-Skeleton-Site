/**
 * Directive for application footer
 * @function
 */
// This is an IIFE to minimalize global carry over of items.
(function () {

  'use strict';

  angular
    .module('app.modules.homepage')
    .directive('homepageDir', [homepageDir]);

  /**
   * Directive for the applicaiton's footer
   * @function homepageDir
   * @returns {object} information necessary for homepage's directive.
   */
  function homepageDir() {
    return {
      restrict: 'EA',
      templateUrl: 'app/modules/homepage/test_part.html',
      bindToController: true,
      scope: {},
      controller: 'homePageCtrl',
      controllerAs: 'vm'
    };
  }

})(); // end IIFE
