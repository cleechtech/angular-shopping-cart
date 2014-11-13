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
			controller: 'MainCtrl'
		})
		.state('product', {
			url: '/product/:id',
			templateUrl: 'views/product.html',
			controller: 'ProductCtrl'
		})
}]);

app.run(['$rootScope', 'ShoppingCart', function($rootScope, ShoppingCart){
	// new shopping cart
	ShoppingCart.intit();

	// listen for updates
	$rootScope.$on('ShoppingCart:change', function(){
    	ShoppingCart.$save();
    });
}])