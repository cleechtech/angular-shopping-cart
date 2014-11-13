
app.factory('ShoppingCart', ['Product', 'localStorage', function(Product, localStorage){
	this.init = function(){
		this.$cart({
			tax: null,
			shipping: null,
			items: []
		})
	};

	this.addItem = function(id){
		// add product to cart
		this.$cart.items.push(Product.getItemById(id));

		// broadcast updates
		$rootScope.$broadcast('ngCart:itemAdded', newItem);
        $rootScope.$broadcast('ngCart:change', {});
	};

	this.removeItem = function(index) {
        this.$cart.items.splice(index, 1);
        $rootScope.$broadcast('ngCart:itemRemoved', {});
        $rootScope.$broadcast('ngCart:change', {});
    };

	this.getCart = function(){
		return this.$cart;
	};

	this.$save = function () {
		// set localStorage cart to this.$cart
        return localStorage.set('cart', JSON.stringify(this.getCart()));
    }
}])