
app.controller('MainCtrl', ['$scope', 'Product', function($scope, Product){
	Product.getAll(function(data){
		$scope.products = data;	
	});
}])