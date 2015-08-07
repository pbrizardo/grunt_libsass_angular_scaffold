'use strict';

/*-----------------------------------

Endpoint list

------------------------------------*/

angular.module('myApp')
	.factory('MainService', ['$http', '$q', function ($http, $q) {

		function getData() {

			// By pass jshint for unused
			console.log($http);			

			var deferred = $q.defer();

			var data = {message:'hello world'};
			deferred.resolve(data);

			return deferred.promise;
		}

		return {
			getData:getData
		};
	}]);
