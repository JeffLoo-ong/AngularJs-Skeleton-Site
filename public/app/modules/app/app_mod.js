(function () {

  'use strict';

	// Create angular global app module.
	angular.module('app',
	  [
			// 3rd party modules
			'ngRoute',

			// My modules
			'app.modules.homepage'	  
		]
	);

})(); // end IIFE