var app = angular.module('app1', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/students', {
            templateUrl: 'view/students.html',
            controller: 'studentController'
        })
        .when('/users', {
            templateUrl: 'view/users.html',
            controller: 'userController'
        })
        .when("/about", {
            templateUrl: "view/about.html",
            controller: 'aboutController'
        })
        .when("/userDetails/:id", {
            templateUrl: "view/userDetails.html",
            controller: 'userDetailsController'
        })
        .otherwise({
            redirectTo: '/students'
        });
});
