
app.factory('Product', ['$http', function($http){
	return {
		getAll: function(cb){
			$http.get('data/products.json').success(cb).error(cb);
		},
		findById: function(id, cb){
			$http.get('data/products.json')
				.success(function(data){
					var product = data
					return cb();
				})
				.error(function(err){
					return cb(err);
				});
		}
	};
}])