var aclApp = angular.module("aclApp",['ui.router']);

aclApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/login");

    $stateProvider.state('signup', {
        url: "/signup",
        templateUrl: "views/signup.html",
        controller: function ($scope) {
            $scope.tagline = "Signup";
        }
    }).state('login',{
        url:"/login",
        templateUrl:'views/login.html',
        controller:function($scope){
            $scope.tagline = "Login"
        }
    });

}).directive('stringToNumber', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(value) {
                return '' + value;
            });
            ngModel.$formatters.push(function(value) {
                return parseFloat(value, 10);
            });
        }
    };
});