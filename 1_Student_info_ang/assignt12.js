var app = angular.module('studentInfoApp', []);

app.controller('studentinfo', ['$scope', function($scope) {
    $scope.user = {firstname: 'Deepak', roll: 34, lastname: 'Rana', maths: 90, science: 80, english: 80};
   
}]);