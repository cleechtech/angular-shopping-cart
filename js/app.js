'use strict';

var app = angular.module('linemansmilestones', [
	'ui.router'
]);

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/main.html',
			controllerAs: 'vm',
			controller: 'MainCtrl'
		})
}]);