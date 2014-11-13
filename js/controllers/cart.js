app.controller('CartCtrl',['$scope', 'ShoppingCart', function($scope, ShoppingCart) {
    $scope.ShoppingCart = ShoppingCart;

}])