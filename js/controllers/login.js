'use strict';

angular.module('cat.controllers').controller('login', function ($rootScope, $scope, $http, $cookieStore) {

    if ($cookieStore.get('loggedIn')) {
        $rootScope.loggedIn = true;
    }

    $scope.login = function () {
        $http.post('/api/auth/login', {
            username: $scope.username,
            password: $scope.password
        }).success(function (data) {
                if (data.success) {
                    $rootScope.loggedIn = true;
                    $cookieStore.put('loggedIn', true);
                } else {
                    toastr.error('Incorrect login credentials!');
                }
            });
    };

    // get the total
    $scope.stats = $http.get('/api/total');

    // reset active
    $scope.resetActive = function () {
        $scope.home_active = false;
        $scope.reviews_active = false;
    };

});