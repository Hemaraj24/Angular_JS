var app = angular.module('votingEligibilityApp', []);

app.controller('votingEligibility', ['$scope', function($scope) {
    $scope.salutation = ["Mr.", "Mrs.", "Miss", "Master"];
    $scope.user = {};
    $scope.showMsg = false;

    $scope.numbers = [];
    for(var count = 1; count <= 100; count++) {
        $scope.numbers.push(count);
    }

    $scope.eligibility = function() {
        if($scope.userAge >= 18) {
            $scope.msg = 'eligible';
        }
        else {
            $scope.msg = 'not eligible';
        }
        $scope.showMsg = true;
    }
}]);   