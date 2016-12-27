var app = angular.module('studentInfoApp', []);

app.controller('studentInfo', ['$scope', function($scope) {
    $scope.user = {};

    $scope.showSection = function() {
        $scope.showMarksSection = true;
    } 
    
    $scope.calculateTotalMarks = function() {
        $scope.totalMarks = parseInt($scope.user.maths) + parseInt($scope.user.science) + parseInt($scope.user.english);
        $scope.percentage = ($scope.totalMarks/300) *100;
         $scope.grade = function() {
        if($scope.userAge >= 18) {
            $scope.msg = 'eligible';
        }
        else {
            $scope.msg = 'not eligible';
        }
        $scope.showMsg = true;
    }
        
    } 
    
    
}]);    