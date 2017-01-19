var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
	console.log("controller Connected")

	$http.get('/catList').then(function(res){
		console.log("I got the data requested")
		$scope.catList = res
	}); 

});
 
