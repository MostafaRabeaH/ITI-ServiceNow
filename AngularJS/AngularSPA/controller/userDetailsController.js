angular.module('app1').controller('userDetailsController', function($scope, $routeParams, studentService) {
    
    $scope.userId = $routeParams.id;
    $scope.user = null;
    $scope.isLoading = true;
    $scope.errorMessage = "";

    $scope.getUserDetails = function() {
        $scope.isLoading = true;
        studentService.getStudentById($scope.userId)
            .then(function(response) {
                $scope.isLoading = false;
                if (response.data && response.data.length > 0) {
                    $scope.user = response.data[0];
                } else {
                    $scope.errorMessage = "User not found.";
                }
            })
            .catch(function(error) {
                $scope.isLoading = false;
                $scope.errorMessage = "Error: Could not load user details.";
            });
    };

    $scope.getUserDetails();

    $scope.goBack = function() {
        window.history.back();
    };
});
