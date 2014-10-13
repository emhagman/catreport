'use strict';

angular.module('cat.controllers').controller('register', function ($rootScope, $scope, $http, $cookieStore) {

    if ($cookieStore.get('loggedIn')) {
        $rootScope.loggedIn = true;
    }

    $scope.register = function () {
        $http.post('/api/auth/register', {
            email: $scope.email,
            password: $scope.password,
            first: $scope.first,
            last: $scope.last
        }).success(function (data) {
                if (data.success) {
                    $rootScope.loggedIn = true;
                    $cookieStore.put('loggedIn', true);
                }
            });
    };
});