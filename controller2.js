
var app = angular.module('mainApp', []);

var req = {
 method: 'GET',
 url: 'http://sanctuary/rest/book',
 headers: {
   'Content-Type': 'json'
 },
 message: 'Connected',
 data: { test: 'test' }
};

app.controller('book', function ($scope, $http){
    if ($http(req)){
        alert(req.message);
    }
	else {
		alert "Не подключено!";
	}
    $http(req).then (function(response){
                $scope.test = response;
            });
});