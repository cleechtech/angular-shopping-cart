
// controller for the product page

app.controller('ProductCtrl', ['$scope', '$stateParams', 'Product', function($scope, $stateParams, Product){
	$scope.product = Product.findById($stateParams.id, function(data){
		return data;
	})
}])