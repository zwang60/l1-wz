(function() {
    'use strict';

    angular.module('app')
        .controller('page1Ctrl', function($scope) {
            $scope.title = 'page1';
        })
        .controller('page2Ctrl', function($scope) {
            $scope.title = 'page2';
        })
        .controller('LoginCtrl', ['$scope', '$http', '$location',
            function(scope, $http, location) {
                scope.isActive = function(path){
                    var current = "#" + location.path();
                    return current == path ? "active" : "";
                }
                $http.get('/api/login').success(function(resp) {
                    scope.loginInfo = resp;
                })
                scope.logout = function() {
                    $http.delete('/api/login').success(function() {
                        scope.loginInfo = {};
                    })
                }
                scope.onLogin = function(info) {
                    console.log(info);
                    scope.loginInfo = info;
                }
            }
        ])
})();
