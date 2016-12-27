var app = angular.module('studentApp', []);

app.controller('selectStudent', ['$scope', function($scope) {
    
    $scope.select = ["School Student", "College Student"];
    $scope.stream = ["Electrical Eng", "Computer Eng", "Mechanical Eng"];
    $scope.user = {}; $scope.ee = {};     $scope.user = {}; $scope.me = {}; 

    $scope.showSection = function() {
        if ($scope.selectOption == "School Student"){
        $scope.schoolStudent = true;
        }
        else if($scope.selectOption == "College Student"){
        $scope.collegeStudent = true;
        }
    } 
    $scope.calculateTotal = function() {
    $scope.totalMarks = parseInt($scope.user.maths) + parseInt($scope.user.english) + parseInt($scope.user.science);
    }
      
    $scope.subOption = function() { 
         $scope.electricalEng = false;
        $scope.computerEng= false;
        $scope.mechanicalEng = false;
        if ($scope.streamOption == "Electrical Eng"){
        $scope.electricalEng = true;
        }
        
        else if ($scope.streamOption == "Computer Eng") {
            
              $scope.computerEng= true;
        }
        else if ($scope.streamOption == "Mechanical Eng") {
            $scope.mechanicalEng = true;
        }
    } 
         
     $scope.electricalTotal = function() {
        $scope.eleTotal = parseInt($scope.ee.e1) + parseInt($scope.ee.e2) + parseInt($scope.ee.e3);
       
    }        
     $scope.computerTotal = function() {
        $scope.compTotal = parseInt($scope.ce.c1) + parseInt($scope.ce.c2) + parseInt($scope.ce.c3);
       
    }        
     $scope.mechanicalTotal = function() {
        $scope.mechTotal = parseInt($scope.me.m1) + parseInt($scope.me.m2) + parseInt($scope.me.m3);
       
    } 
}]);    