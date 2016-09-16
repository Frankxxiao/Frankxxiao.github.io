var server = require("./server");

function IndexController($scope){
	$scope.start = server.start();
}