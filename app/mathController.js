/**
 * Created by Steven on 6/25/2014.
 */

myapp.controller('mathController', ['$scope', 'calculator', function($scope, calculator) {
    $scope.firstValue = 0;
    $scope.secondValue = 0;
    $scope.solution = 0;
    $scope.mathType = "";

    $scope.mathTypes = [{"name": "add"}, {"name":"subtract"}, {"name":"multiply"}, {"name":"divide"}];

    $scope.execute = function() {
        switch($scope.mathType.name) {
            case "subtract":
                $scope.solution = calculator.subtract($scope.firstValue, $scope.secondValue);
                break;
            case "multiply":
                $scope.solution = calculator.multiply($scope.firstValue, $scope.secondValue);
                break;
            case "divide":
                $scope.solution = calculator.divide($scope.firstValue, $scope.secondValue);
                break;
            default:
                $scope.solution = calculator.addition($scope.firstValue, $scope.secondValue);
                break;
        }
    };
}]);