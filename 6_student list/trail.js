
var app = angular.module("studentInfoApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/collegestd", {
        templateUrl : "college.html",
        controller : "collegeCtrl"
    })
    .when("/schoolstd", {
        templateUrl : "school.html",
        controller : "schoolCtrl"
    });
});
app.controller("collegeCtrl", function ($scope) {
     $scope.students = [{name: 'Deepak Rana', roll: 1000, stream:'Engineering'}, {name: 'Tej', roll: 1001, stream:'Enginnering'}, {name: 'Hema', roll: 1002, stream:'Technology'},{name: 'Akhil', roll: 1003, stream:'Engineering'}];
  
});
app.controller("schoolCtrl", function ($scope) {
   $scope.students = [{name: 'John', roll: 100, grade:8}, {name: 'Charlin', roll: 101, grade:9}, {name: 'Jeni', roll: 102, grade:6},{name: 'Nancy', roll: 103, grade:5}];
});

