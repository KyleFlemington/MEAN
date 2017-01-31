var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
	console.log("controller Connected")

var refresh = function() {
	$http.get('/catList').then(function(res){
		console.log("I got the data requested")
		$scope.catList = res.data;
		$scope.cat = '';

	}); 
}

refresh();

	$scope.addCat = function() {
		console.log($scope.cat);
		$http.post('/catList', $scope.cat).then(function(response){
			console.log(response);
			refresh();
		});

	};


$scope.remove = function(id) {
	console.log(id);
	$http.delete('/catlist/' + id).then(function(response){
		refresh();
	})
};


});
 
