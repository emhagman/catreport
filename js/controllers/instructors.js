'use strict';

angular.module('cat.controllers').controller('instructors', function ($scope, $http, $cookieStore) {

    $http.get('/api/instructors/all').success(function (data) {
        $scope.instructors = data;
    });

    $scope.filter = function () {
        $http.post('/api/instructors/filter', { name: $scope.filterName }).success(function (data) {
            $scope.instructors = data;
        });
    };
});